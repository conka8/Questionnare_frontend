import {
    CONTRACTS,
    ChainId,
    approveEth,
    getEmitterAddressEth,
    getEmitterAddressSolana,
    getForeignAssetSolana,
    getOriginalAssetSol,
    hexToUint8Array,
    parseSequenceFromLogEth,
    parseSequenceFromLogSolana,
    postVaaSolanaWithRetry,
    redeemOnEth,
    redeemOnSolana,
    transferFromEth,
    transferFromSolana,
    tryNativeToHexString,
    tryNativeToUint8Array,
} from "@certusone/wormhole-sdk";
import {
    ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID,
    createAssociatedTokenAccountInstruction,
    getAssociatedTokenAddress
} from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { fetchTransaction } from "@wagmi/core";
import axios from "axios";
import {
    CHAIN_ID_TO_TOKEN_ADDRESS,
    SUPPORTED_CHAIN_IDS_TO_CORE_BRIDGE,
    SUPPORTED_CHAIN_IDS_TO_TOKEN_BRIDGE,
    SUPPORTED_CHAIN_IDS_TO_WORMHOLE_CHAIN_IDS,
    WormholeChainIds,
    tokenAddress,
    totalBlockConfirmations
} from "config/constants/chains";
import { SelectOptions } from "config/types";
import { useSolanaConnection, useSolanaWallet } from "contexts/SolanaWalletContext";
import { parseUnits, zeroPad } from "ethers/lib/utils.js";
import { useAccount, useNetwork, useSigner, useSwitchNetwork } from "wagmi";

type evmConfirmations = {
    receipt: any,
    totalBlocks: number,
    emitterChain: number,
    emitterAddress: string,
    sequence: string,
    setConfirmedBlock: any,
    retryAttempts: number
}

type solConfirmations = {
    solanaConnection: any,
    totalBlocks: number,
    emitterChain: number,
    emitterAddress: string,
    sequence: string,
    setConfirmedBlock: any,
    retryAttempts: number
}

const evmBlockConfirmations = async (
    { receipt,
        totalBlocks,
        emitterChain,
        emitterAddress,
        sequence,
        setConfirmedBlock,
        retryAttempts }: evmConfirmations) => {
    let blockConfirmed = 0;
    let confirmations;
    let result;
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const transaction = await fetchTransaction({
            hash: receipt?.transactionHash as `0x${string}`,
        })
        confirmations = transaction?.confirmations
        if (confirmations >= totalBlocks * 0.3 && !result) {
            const URL = `https://api.wormholescan.io/api/v1/vaas/${emitterChain}/${emitterAddress}/${sequence}`
            let attempts = 0;
            while (!result) {
                attempts++;
                setConfirmedBlock(++confirmations)
                await new Promise((resolve) => setTimeout(resolve, 1500));
                try {
                    result = await axios.get(URL)
                    result = result.data.data.vaa;
                    blockConfirmed = totalBlocks
                } catch (e) {
                    if (retryAttempts !== undefined && attempts > retryAttempts) {
                        throw e;
                    }
                }
            }

        }
        else {
            blockConfirmed = confirmations;
        }
    }
    catch (e) {
        console.error(e)
    }
    return { blockConfirmed, vaaHex: result }
}

const solBlockConfirmation = async (
    { solanaConnection,
        totalBlocks,
        emitterChain,
        emitterAddress,
        sequence,
        setConfirmedBlock,
        retryAttempts }: solConfirmations) => {
    let result;
    let blockConfirmed = 0;
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const blockConfirmations = solanaConnection?.onSlotChange((slotInfo) => {
            setConfirmedBlock(slotInfo?.slot)
            return slotInfo?.slot
        })
        if (blockConfirmations >= totalBlocks * 0.3 && !result) {
            const URL = `https://api.wormholescan.io/api/v1/vaas/${emitterChain}/${emitterAddress}/${sequence}`
            let attempts = 0;
            let confirmations = blockConfirmations;
            while (!result) {
                attempts++;
                setConfirmedBlock(++confirmations)
                await new Promise((resolve) => setTimeout(resolve, 1500));
                try {
                    result = await axios.get(URL)
                    result = result.data.data.vaa;
                    blockConfirmed = totalBlocks
                } catch (e) {
                    if (retryAttempts !== undefined && attempts > retryAttempts) {
                        throw e;
                    }
                }
            }
        }
        else {
            blockConfirmed = blockConfirmations;
        }
    } catch (e) {
        console.error(e)
    }
    return { blockConfirmed, vaaHex: result }
}

export const useHandleBridge = (selectedFromChain: SelectOptions, selectedToChain: SelectOptions, amount: string, setConfirmedBlock: any) => {
    const { connection: solanaConnection } = useSolanaConnection();
    const { publicKey } = useSolanaWallet();
    const { signTransaction: solSignTransaction } = useWallet()
    const { data: signer, refetch: refetchSigner } = useSigner();
    const { address } = useAccount();
    const { switchNetworkAsync } = useSwitchNetwork();
    const { chain } = useNetwork();
    const totalBlocks = totalBlockConfirmations[selectedFromChain?.value]

    const fromChainTokenAddress = CHAIN_ID_TO_TOKEN_ADDRESS[selectedFromChain?.value]
    const fromChain = SUPPORTED_CHAIN_IDS_TO_WORMHOLE_CHAIN_IDS[selectedFromChain?.value]
    const toChain = SUPPORTED_CHAIN_IDS_TO_WORMHOLE_CHAIN_IDS[selectedToChain?.value]
    const tokenBridgeAdress = SUPPORTED_CHAIN_IDS_TO_TOKEN_BRIDGE[selectedFromChain?.value]
    const coreBridgeAdress = SUPPORTED_CHAIN_IDS_TO_CORE_BRIDGE[selectedFromChain?.value]

    const EVMtoSOL = async () => {
        const solanaMintKey = new PublicKey(
            (await getForeignAssetSolana(
                solanaConnection,
                CONTRACTS.MAINNET.solana.token_bridge,
                WormholeChainIds.POLYGON, // Origin chain (Homechain)
                hexToUint8Array(tryNativeToHexString(tokenAddress.polygon, WormholeChainIds.POLYGON) || "") // Homechian address and chainID
            )) || ""
        );
        const recipient = await getAssociatedTokenAddress(
            solanaMintKey,
            publicKey,
            true,
            TOKEN_PROGRAM_ID,
            ASSOCIATED_TOKEN_PROGRAM_ID
        );
        const associatedAddressInfo = await solanaConnection.getAccountInfo(recipient);
        if (!associatedAddressInfo) {
            const transaction = new Transaction().add(
                await createAssociatedTokenAccountInstruction(
                    publicKey, // payer
                    recipient,
                    publicKey, // owner
                    solanaMintKey
                )
            );
            const { blockhash } = await solanaConnection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = publicKey;
            const signed = await solSignTransaction(transaction)
            await solanaConnection.sendRawTransaction(signed.serialize())
        }

        const tokenAmount = parseUnits(amount, 18);
        await approveEth(
            tokenBridgeAdress,
            fromChainTokenAddress,
            signer,
            tokenAmount
        );
        const receipt = await transferFromEth(
            tokenBridgeAdress,
            signer,
            fromChainTokenAddress,
            tokenAmount,
            toChain,
            tryNativeToUint8Array(recipient.toString(), toChain)
        );

        const sequence = await parseSequenceFromLogEth(
            receipt,
            coreBridgeAdress
        );

        let blockExecuted = 0;
        let vaaInHex: string;
        const blockConfirmations: evmConfirmations = { receipt, totalBlocks, emitterChain: fromChain, emitterAddress: getEmitterAddressEth(tokenBridgeAdress), sequence: sequence.toString(), setConfirmedBlock, retryAttempts: 2000 }
        while (blockExecuted < totalBlocks) {
            const { blockConfirmed, vaaHex } = await evmBlockConfirmations(blockConfirmations)
            blockExecuted = blockConfirmed;
            vaaInHex = vaaHex;
            setConfirmedBlock(blockConfirmed)
        }

        await postVaaSolanaWithRetry(
            solanaConnection,
            solSignTransaction,
            CONTRACTS.MAINNET.solana.core,
            publicKey,
            Buffer.from(vaaInHex, "base64"),
            500
        );
        const transaction = await redeemOnSolana(
            solanaConnection,
            CONTRACTS.MAINNET.solana.core,
            CONTRACTS.MAINNET.solana.token_bridge,
            publicKey,
            Buffer.from(vaaInHex, "base64"),
        );
        const signed = await solSignTransaction(transaction)
        const txID = await solanaConnection.sendRawTransaction(signed.serialize())
        return txID
    }

    const SOLtoEVM = async () => {
        const tokenBridgeAdress = SUPPORTED_CHAIN_IDS_TO_TOKEN_BRIDGE[selectedToChain?.value]

        const fromAddress = (
            await getAssociatedTokenAddress(
                new PublicKey(fromChainTokenAddress),
                publicKey
            )
        ).toString();

        const tokenFilter = {
            programId: TOKEN_PROGRAM_ID,
        };

        let results = await solanaConnection.getParsedTokenAccountsByOwner(
            publicKey,
            tokenFilter
        );

        let initialSolanaBalance: number = 0;
        for (const item of results.value) {
            const tokenInfo = item.account.data.parsed.info;
            // const address = tokenInfo.mint;
            const amount = tokenInfo.tokenAmount.uiAmount;
            if (tokenInfo.mint === fromChainTokenAddress) {
                initialSolanaBalance = amount;
            }
        }
        // Get the initial wallet balance on Eth
        const originAssetHex = tryNativeToUint8Array(
            fromChainTokenAddress,
            fromChain
        );
        if (!originAssetHex) {
            throw new Error("originAssetHex is null");
        }

        const originAssetDetail = await getOriginalAssetSol(
            solanaConnection,
            CONTRACTS.MAINNET.solana.token_bridge,
            fromChainTokenAddress
        )
        const targetAddress = zeroPad(hexToUint8Array(address.slice(2)), 32)

        const tokenAmount = parseUnits(amount, 8);
        const transaction = await transferFromSolana(
            solanaConnection,
            CONTRACTS.MAINNET.solana.core,
            CONTRACTS.MAINNET.solana.token_bridge,
            publicKey.toBase58(),
            fromAddress,
            fromChainTokenAddress,
            tokenAmount.toBigInt(),
            targetAddress,
            toChain,
            originAssetDetail.assetAddress,
            originAssetDetail.chainId,
        );
        const signed = await solSignTransaction(transaction)
        const transactionId = await solanaConnection.sendRawTransaction(signed.serialize())
        await solanaConnection.confirmTransaction(transactionId, "confirmed");
        const info = await solanaConnection.getTransaction(transactionId, { commitment: "confirmed" });
        if (!info) {
            console.log("An error occurred while fetching the transaction info")
            throw new Error(
                "An error occurred while fetching the transaction info"
            );
        }
        const sequence = await parseSequenceFromLogSolana(info);
        let blockExecuted = 0;
        let vaaInHex: string;
        const blockConfirmations: solConfirmations = { solanaConnection, totalBlocks, emitterChain: fromChain, emitterAddress: getEmitterAddressSolana(CONTRACTS.MAINNET.solana.token_bridge), sequence: sequence.toString(), setConfirmedBlock, retryAttempts: 2000 }
        while (blockExecuted < totalBlocks) {
            const { blockConfirmed, vaaHex } = await solBlockConfirmation(blockConfirmations)
            blockExecuted = blockConfirmed
            vaaInHex = vaaHex;
            setConfirmedBlock(blockConfirmed)
        }
        const txID = await redeemOnEth(
            tokenBridgeAdress,
            signer,
            Buffer.from(vaaInHex, "base64"),
        );
        return txID
    }

    const EvmToEvm = async () => {
        const tokenAmount = parseUnits(amount, 18);

        await approveEth(
            SUPPORTED_CHAIN_IDS_TO_TOKEN_BRIDGE[selectedFromChain?.value],
            fromChainTokenAddress,
            signer,
            tokenAmount
        );

        const receipt = await transferFromEth(
            SUPPORTED_CHAIN_IDS_TO_TOKEN_BRIDGE[selectedFromChain?.value],
            signer,
            fromChainTokenAddress,
            tokenAmount,
            toChain as ChainId,
            tryNativeToUint8Array(address, toChain as ChainId)
        );

        const sequence = await parseSequenceFromLogEth(
            receipt,
            SUPPORTED_CHAIN_IDS_TO_CORE_BRIDGE[selectedFromChain?.value]
        );

        let blockExecuted = 0;
        let vaaInHex: string;
        const blockConfirmations: evmConfirmations = { receipt, totalBlocks, emitterChain: fromChain, emitterAddress: getEmitterAddressEth(tokenBridgeAdress), sequence: sequence.toString(), setConfirmedBlock, retryAttempts: 2000 }
        while (blockExecuted < totalBlocks) {
            const { blockConfirmed, vaaHex } = await evmBlockConfirmations(blockConfirmations)
            blockExecuted = blockConfirmed;
            vaaInHex = vaaHex;
            setConfirmedBlock(blockConfirmed)
        }

        if (chain?.id !== selectedToChain?.value) {
            const newSigner = await switchNetworkAsync(selectedToChain?.value).then(async (res) => {
                const updatedSinger = await refetchSigner()
                return updatedSinger.data
            });
            const txID = await redeemOnEth(SUPPORTED_CHAIN_IDS_TO_TOKEN_BRIDGE[selectedToChain?.value], newSigner, Buffer.from(vaaInHex, 'base64'));
            return txID
        }
    }
    return { EVMtoSOL, SOLtoEVM, EvmToEvm };
}
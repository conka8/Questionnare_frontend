import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import {
    useSolanaConnection,
    useSolanaWallet,
} from "contexts/SolanaWalletContext";
import getProvider from "hooks/useSolanaProvider";
import { useEffect, useState } from "react";
import { handleDecimals } from "utils";

const useSolanaBalance = () => {
    const { connection: solanaConnection } = useSolanaConnection();
    const { connected: solanaConnected, publicKey: walletPublicKey } = useSolanaWallet();
    const [solanaBalanceFormatted, setSolanaWalletBalanceFormatted] =
        useState("-");
    const [solanaBalance, setSolanaWalletBalance] = useState(undefined);
    const solanaConnectionProvider = getProvider()

    solanaConnectionProvider.on("accountChanged", (publicKey: PublicKey) => {
        fetchBalance(publicKey)
    })

    const fetchBalance = async (publicKey: PublicKey) => {
        const solanaBalance = await solanaConnection.getBalance(publicKey);
        const balance = solanaBalance / LAMPORTS_PER_SOL;
        setSolanaWalletBalance(balance);
        setSolanaWalletBalanceFormatted(`${handleDecimals(balance)} SOL`);
    };

    useEffect(() => {
        if (solanaConnected) {
            fetchBalance(walletPublicKey);
        }
    }, [solanaConnected, walletPublicKey]);

    return { solanaBalance, solanaBalanceFormatted };
};

export default useSolanaBalance;
import React, { FC, useMemo } from "react";
import {
    ConnectionProvider,
    WalletProvider,
    useConnection,
    useWallet,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
    PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Commitment, ConnectionConfig } from "@solana/web3.js";


interface Props {
    children: React.ReactNode;
}
export const SolanaWalletProvider: FC<Props> = ({ children }) => {
    const productionEnv = process.env.REACT_APP_CHAINS_ENV === "mainnet";
    let network, endpoint;

    if (!productionEnv) {
        network = WalletAdapterNetwork.Devnet;
        endpoint = "https://api.devnet.solana.com";
    } else {
        network = WalletAdapterNetwork.Mainnet;
        endpoint =
            "https://solana-mainnet.g.alchemy.com/v2/MQwtjMKBpjhH0zus2hfsquy8vX0dCwAu";
    }

    const config: ConnectionConfig = {
        commitment: "processed" as Commitment,
    };

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter({ network }),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint} config={config}>
            <WalletProvider wallets={wallets}>{children}</WalletProvider>
        </ConnectionProvider>
    );
};

export const useSolanaWallet = useWallet;
export const useSolanaConnection = useConnection;
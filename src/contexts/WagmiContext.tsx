import { WagmiConfig, createClient, configureChains } from "wagmi";
import { ReactNode } from "react";
import { publicProvider } from "wagmi/providers/public";

import {
  mainnet,
  goerli,
  optimism,
  optimismGoerli,
  polygonMumbai,
  polygon,
  avalanche,
  avalancheFuji,
  fantom,
  fantomTestnet,
  bsc,
  bscTestnet,
  arbitrum,
  arbitrumGoerli,
  base
} from "@wagmi/chains";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { jsonRpcProvider } from "@wagmi/core/providers/jsonRpc";
import { getNativeChainBaseRPCUrl } from "config/constants/rpcUrls";

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    goerli,
    optimism,
    polygonMumbai,
    polygon,
    avalanche,
    avalancheFuji,
    fantom,
    fantomTestnet,
    bsc,
    bscTestnet,
    arbitrum,
    arbitrumGoerli,
    base
  ],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: getNativeChainBaseRPCUrl(chain.id),
      }),
    }),
  ]
);

// Set up client
const client = createClient({
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
  ],
  provider,
  webSocketProvider,
});

interface WagmiProviderProps {
  children: ReactNode;
}

export const WagmiProvider: React.FC<WagmiProviderProps> = ({ children }) => {
  return <WagmiConfig client={client}> {children}</WagmiConfig>;
};

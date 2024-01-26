import { CONTRACTS } from "@certusone/wormhole-sdk";

export enum SupportedChainId { // for Non EVM we are putting these Chain IDs to be in negative.
  TERRA = 202, // for Non EVM we are putting these Chain IDs to be in negative.
  ETHEREUM = 1,
  POLYGON = 137,
  BINANCE = 56,
  AVAX = 43114,
  FANTOM = 250,
  FUJI = 43113,
  GOERLI = 5,
  BINANCE_TESTNET = 97,
  FANTOM_TESTNET = 4002,
  MUMBAI = 80001,
  ARBITRUM = 42161,
  OPTIMISM = 10,
  ARBITRUM_TESTNET = 421613,
  SOLANA_DEV_NET = 102,
  SOLANA = 101,
  BASE = 8453
}

export enum WormholeChainIds {
  SOLANA = 1,
  ETHEREUM = 2,
  BINANCE = 4,
  POLYGON = 5, //HomeChain
  AVAX = 6,
  FANTOM = 10,
  ARBITRUM = 23,
  OPTIMISM = 24,
  BASE = 30
}

export enum tokenAddress {
  solana = "BpYaMhLzzgmQqRuMzhZbCaV1RDWoctfqKtfgyQsWJpmG",
  polygon = "0x3A3D098C9099d4A7CdBea53ee244c2157328e214",
  binance = "0x59760De576038E5875E391BD4339F998fce9f0E9",
  optimism = "0xd8F7C14179520578Eac830eb934420C6cdfAd122",
  avalanche = "0x5e2f7dE10532b0F493c32b1D96549BDD700dCc0D",
  base = "0x31EE577CbB6F5e9696c1EbDcD11991d7F8bC5B40",
  arbitrum = "0xDa5aF4DD751b9D2A641Cbc6A37D1dd04FAD7E89d"
}

export const totalBlockConfirmations = {
  [SupportedChainId.SOLANA]: 100,
  [SupportedChainId.ETHEREUM]: 70,
  [SupportedChainId.BINANCE]: 10,
  [SupportedChainId.POLYGON]: 220,
  [SupportedChainId.AVAX]: 20,
  [SupportedChainId.FANTOM]: 10,
  [SupportedChainId.ARBITRUM]: 1024,
  [SupportedChainId.OPTIMISM]: 512,
  [SupportedChainId.BASE]: 512,
}

export const CHAIN_ID_TO_TOKEN_ADDRESS = {
  [SupportedChainId.SOLANA]: tokenAddress.solana,
  [SupportedChainId.POLYGON]: tokenAddress.polygon,
  [SupportedChainId.BINANCE]: tokenAddress.binance,
  [SupportedChainId.OPTIMISM]: tokenAddress.optimism,
  [SupportedChainId.AVAX]: tokenAddress.avalanche,
  [SupportedChainId.BASE]: tokenAddress.base,
  [SupportedChainId.ARBITRUM]: tokenAddress.arbitrum,
}

export const SUPPORTED_CHAIN_IDS_TO_TOKEN_BRIDGE = {
  [SupportedChainId.SOLANA]: CONTRACTS.MAINNET.solana.token_bridge,
  [SupportedChainId.ETHEREUM]: CONTRACTS.MAINNET.ethereum.token_bridge,
  [SupportedChainId.BINANCE]: CONTRACTS.MAINNET.bsc.token_bridge,
  [SupportedChainId.POLYGON]: CONTRACTS.MAINNET.polygon.token_bridge,
  [SupportedChainId.AVAX]: CONTRACTS.MAINNET.avalanche.token_bridge,
  [SupportedChainId.FANTOM]: CONTRACTS.MAINNET.fantom.token_bridge,
  [SupportedChainId.ARBITRUM]: CONTRACTS.MAINNET.arbitrum.token_bridge,
  [SupportedChainId.OPTIMISM]: CONTRACTS.MAINNET.optimism.token_bridge,
  [SupportedChainId.BASE]: CONTRACTS.MAINNET.base.token_bridge,
}

export const SUPPORTED_CHAIN_IDS_TO_CORE_BRIDGE = {
  [SupportedChainId.SOLANA]: CONTRACTS.MAINNET.solana.core,
  [SupportedChainId.ETHEREUM]: CONTRACTS.MAINNET.ethereum.core,
  [SupportedChainId.BINANCE]: CONTRACTS.MAINNET.bsc.core,
  [SupportedChainId.POLYGON]: CONTRACTS.MAINNET.polygon.core,
  [SupportedChainId.AVAX]: CONTRACTS.MAINNET.avalanche.core,
  [SupportedChainId.FANTOM]: CONTRACTS.MAINNET.fantom.core,
  [SupportedChainId.ARBITRUM]: CONTRACTS.MAINNET.arbitrum.core,
  [SupportedChainId.OPTIMISM]: CONTRACTS.MAINNET.optimism.core,
  [SupportedChainId.BASE]: CONTRACTS.MAINNET.base.core,
}

export const SUPPORTED_CHAIN_IDS_TO_WORMHOLE_CHAIN_IDS = {
  [SupportedChainId.SOLANA]: WormholeChainIds.SOLANA,
  [SupportedChainId.ETHEREUM]: WormholeChainIds.ETHEREUM,
  [SupportedChainId.BINANCE]: WormholeChainIds.BINANCE,
  [SupportedChainId.POLYGON]: WormholeChainIds.POLYGON,
  [SupportedChainId.AVAX]: WormholeChainIds.AVAX,
  [SupportedChainId.FANTOM]: WormholeChainIds.FANTOM,
  [SupportedChainId.ARBITRUM]: WormholeChainIds.ARBITRUM,
  [SupportedChainId.OPTIMISM]: WormholeChainIds.OPTIMISM,
  [SupportedChainId.BASE]: WormholeChainIds.BASE,
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.ETHEREUM]: "Ethereum",
  [SupportedChainId.TERRA]: "Terra",
  [SupportedChainId.POLYGON]: "Polygon",
  [SupportedChainId.BINANCE]: "Binance",
  [SupportedChainId.FANTOM]: "Fantom",
  [SupportedChainId.AVAX]: "Avax",
  [SupportedChainId.FUJI]: "Fuji",
  [SupportedChainId.GOERLI]: "Goerli",
  [SupportedChainId.BINANCE_TESTNET]: "Binance",
  [SupportedChainId.SOLANA]: "Solana",
  [SupportedChainId.FANTOM_TESTNET]: "Fantom testnet",
  [SupportedChainId.MUMBAI]: "Mumbai",
  [SupportedChainId.ARBITRUM]: "Arbitrum",
  [SupportedChainId.OPTIMISM]: "Optimism",
  [SupportedChainId.ARBITRUM_TESTNET]: "Arbitrum testnet",
  [SupportedChainId.SOLANA_DEV_NET]: "Solana Devnet",
  [SupportedChainId.BASE]: "Base",
  4: "rinkeby",
};

export const solanaSupportiveChains = new Set([
  SupportedChainId.SOLANA,
  SupportedChainId.SOLANA_DEV_NET,
]);

export const evmSupportiveChains = new Set([
  SupportedChainId.ETHEREUM,
  SupportedChainId.POLYGON,
  SupportedChainId.BINANCE,
  SupportedChainId.AVAX,
  SupportedChainId.FANTOM,
  SupportedChainId.FUJI,
  SupportedChainId.BASE,
  SupportedChainId.GOERLI,
  SupportedChainId.BINANCE_TESTNET,
  SupportedChainId.FANTOM_TESTNET,
  SupportedChainId.MUMBAI,
  SupportedChainId.ARBITRUM,
  SupportedChainId.OPTIMISM,
  SupportedChainId.ARBITRUM_TESTNET,
]);


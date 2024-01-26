import { random } from "lodash";
import { SupportedChainId } from "config/constants/chains";

// Array of available nodes to connect to
export const nodes = [
  `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
];

const getNodeUrl = (): string => {
  const randomIndex = random(0, nodes.length - 1);
  return nodes[randomIndex];
};

export default getNodeUrl;

const bscNodes = [
  "https://bsc-dataseed.binance.org",
  "https://bsc-dataseed1.defibit.io",
  "https://bsc-dataseed1.ninicoin.io",
];
export const getBSCNodeURL = (): string => {
  const randomIndex = random(0, bscNodes.length - 1);
  return bscNodes[randomIndex];
};

const polygonNodes = [
  `https://polygon-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
];
export const getPolygonNodeURL = (): string => {
  const randomIndex = random(0, polygonNodes.length - 1);
  return polygonNodes[randomIndex];
};

const avaxNodes = ["https://api.avax.network/ext/bc/C/rpc"];
export const getAvaxNodeUrl = (): string => {
  const randomIndex = random(0, avaxNodes.length - 1);
  return avaxNodes[randomIndex];
};

const fantomNodes = ["https://rpc.ftm.tools/"];
export const getFantomNodeUrl = (): string => {
  const randomIndex = random(0, avaxNodes.length - 1);
  return fantomNodes[randomIndex];
};

// Array of available nodes to connect to
export const ethNodes = [
  `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
];

export const getETHNodeUrl = (): string => {
  const randomIndex = random(0, ethNodes.length - 1);
  return ethNodes[randomIndex];
};
export const getFujiNodeURL = (): string => {
  return "https://api.avax-test.network/ext/bc/C/rpc";
};

export const getBinanceTestURL = (): string => {
  return "https://rpc.ankr.com/bsc_testnet_chapel";
};

export const getPolygonTestURL = (): string => {
  return `https://polygon-mumbai.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;
};
export const getNetworkRPCUrl = {
  // 2: getGoerliNodeURL,
  // 102: 'https://api.devnet.solana.com',
  // 5: getGoerliNodeURL(),
  // 43113: getFujiNodeURL(),
  // 43114: getFujiNodeURL(),
  // 97: getBinanceTestURL(),
};

// export const getSolanaUrl = (): string => {
//   return "https://solana-mainnet.g.alchemy.com/v2/DDiI3x1BSS09MybvjE2D-6pM2Ywmfl-6";
// };
export const getFantomTestNetNodeUrl = (): string => {
  return "https://rpc.testnet.fantom.network/";
};

export const getGoerliNodeURL = (): string => {
  return `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;
};

export const getArbitrumGoerliNodeURL = (): string => {
  return `https://arbitrum-goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;
};

export const getArbitrumNodeURL = (): string => {
  return `https://arbitrum-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;
};

export const getOptimisimNodeURL = (): string => {
  return `https://optimism-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;
};

export const getBaseNodeURL = (): string => {
  return "https://endpoints.omniatech.io/v1/base/mainnet/public";
}

export const getNativeChainBaseRPCUrl = (chainId: SupportedChainId): string => {
  switch (chainId) {
    case SupportedChainId.ETHEREUM:
      return getETHNodeUrl();
    case SupportedChainId.BINANCE:
      return getBSCNodeURL();
    case SupportedChainId.POLYGON:
      return getPolygonNodeURL();
    case SupportedChainId.AVAX:
      return getAvaxNodeUrl();
    case SupportedChainId.FANTOM:
      return getFantomNodeUrl();
    // case SupportedChainId.SOLANA:
    //   return getSolanaUrl();
    case SupportedChainId.FUJI:
      return getFujiNodeURL();
    case SupportedChainId.BINANCE_TESTNET:
      return getBinanceTestURL();
    case SupportedChainId.MUMBAI:
      return getPolygonTestURL();
    case SupportedChainId.FANTOM_TESTNET:
      return getFantomTestNetNodeUrl();
    case SupportedChainId.GOERLI:
      return getGoerliNodeURL();
    case SupportedChainId.ARBITRUM_TESTNET:
      return getArbitrumGoerliNodeURL();
    case SupportedChainId.ARBITRUM:
      return getArbitrumNodeURL();
    case SupportedChainId.OPTIMISM:
      return getOptimisimNodeURL();
    case SupportedChainId.BASE:
      return getBaseNodeURL();
    default:
      throw new Error("Unsupported chain " + chainId);
  }
};

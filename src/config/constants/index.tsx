import { SupportedChainId } from "./chains";
import {
  FantomChainIcon,
  PolygonChainIcon,
  BinanceBadgeIcon,
  ArbitrumChainIcon,
  OptimismChainIcon,
  EthChainIcon,
  AvaxChainIcon,
  SolanaChainIcon,
  BaseChainIcon,
} from "components/Svg";
import { DeployStatus } from "../types/index";

export const FASTEST_INTERVAL = 3000000;
export const FAST_INTERVAL = 10000000;
export const SLOW_INTERVAL = 60000000;
export const TEN_SECOND_INTERVAL = 10000;

export const StatusStyles = {
  [DeployStatus.DEPLOYED]: {
    color: "#54AE57",
    bg: "linear-gradient(180deg, rgba(111, 225, 115, 0.15) 0%, rgba(96, 228, 101, 0.15) 93.23%)",
  },
  [DeployStatus.IN_PROGRESS]: {
    color: "#E4A62E",
    bg: "#FBAF0033",
  },
  [DeployStatus.PENDING]: {
    color: "#F2F2F2",
    bg: "rgba(255, 255, 255, 0.15)",
  },
  [DeployStatus.WAITING_FOR_CONFIRMATION]: {
    color: "#E4A62E",
    bg: "#FBAF0033",
  },

  [DeployStatus.QUERIED]: {
    color: "#F2F2F2",
    bg: "rgba(255, 255, 255, 0.15)",
  },
  [DeployStatus.LOW_FEES]: {
    color: "#F2F2F2",
    bg: "rgba(255, 255, 255, 0.15)",
  },
  [DeployStatus.FAILED]: {
    color: "#F2F2F2",
    bg: "rgba(255, 255, 255, 0.15)",
  },
};

const TEST_NET_CHAIN = [
  {
    icon: <EthChainIcon width={"45px"} height={"45px"} />,
    name: "Goerli",
    chainId: SupportedChainId.GOERLI,
    isSolana: false,
  },
  {
    icon: <AvaxChainIcon width={"45px"} height={"45px"} />,
    name: "Fuji",
    chainId: SupportedChainId.FUJI,
    isSolana: false,
  },
  {
    icon: <FantomChainIcon width={"45px"} height={"45px"} />,
    name: "Fantom",
    chainId: SupportedChainId.FANTOM_TESTNET,
    isSolana: false,
  },
  {
    icon: <BinanceBadgeIcon width={"45px"} height={"45px"} />,
    name: "Binance",
    chainId: SupportedChainId.BINANCE_TESTNET,
    isSolana: false,
  },
  {
    icon: <PolygonChainIcon width={"45px"} height={"45px"} />,
    name: "Mumbai",
    chainId: SupportedChainId.MUMBAI,
    isSolana: false,
  },
  {
    icon: <ArbitrumChainIcon width={"45px"} height={"45px"} />,
    name: "Arbitrum",
    chainId: SupportedChainId.ARBITRUM_TESTNET,
    isSolana: false,
  },
  {
    icon: <SolanaChainIcon width={"45px"} height={"45px"} />,
    name: "Solana",
    chainId: SupportedChainId.SOLANA_DEV_NET,
    isSolana: true,
  },
];
const MAIN_NET_CHAIN = [
  {
    icon: <EthChainIcon width={"45px"} height={"45px"} />,
    name: "Ethereum",
    chainId: SupportedChainId.ETHEREUM,
    isSolana: false,
  },
  {
    icon: <AvaxChainIcon width={"45px"} height={"45px"} />,
    name: "Avalanche",
    chainId: SupportedChainId.AVAX,
    isSolana: false,
  },
  {
    icon: <BinanceBadgeIcon width={"45px"} height={"45px"} />,
    name: "Binance",
    chainId: SupportedChainId.BINANCE,
    isSolana: false,
  },
  {
    icon: <PolygonChainIcon width={"45px"} height={"45px"} />,
    name: "Polygon",
    chainId: SupportedChainId.POLYGON,
    isSolana: false,
  },
  {
    icon: <ArbitrumChainIcon width={"45px"} height={"45px"} />,
    name: "Arbitrum",
    chainId: SupportedChainId.ARBITRUM,
    isSolana: false,
  },
  {
    icon: <OptimismChainIcon width={"45px"} height={"35px"} />,
    name: "Optimism",
    chainId: SupportedChainId.OPTIMISM,
    isSolana: false,
  },
  {
    icon: <BaseChainIcon width={"45px"} height={"35px"} />,
    name: "Base",
    chainId: SupportedChainId.BASE,
    isSolana: false,
  },
  {
    icon: <SolanaChainIcon width={"45px"} height={"45px"} />,
    name: "Solana",
    chainId: SupportedChainId.SOLANA,
    isSolana: true,
  },
];

const supportedChainTestnetAPI = new Set([
  SupportedChainId.GOERLI,
  SupportedChainId.FUJI,
  SupportedChainId.FANTOM_TESTNET,
  SupportedChainId.BINANCE_TESTNET,
  SupportedChainId.MUMBAI,
  SupportedChainId.ARBITRUM_TESTNET,
  SupportedChainId.SOLANA_DEV_NET,
]);
const supportedChainMainnetAPI = new Set([
  SupportedChainId.ETHEREUM,
  SupportedChainId.AVAX,
  SupportedChainId.FANTOM,
  SupportedChainId.BINANCE,
  SupportedChainId.POLYGON,
  SupportedChainId.ARBITRUM,
  SupportedChainId.OPTIMISM,
  SupportedChainId.BASE,
  SupportedChainId.SOLANA,
]);
export const ChainArray =
  process.env.REACT_APP_CHAINS_ENV === "mainnet"
    ? MAIN_NET_CHAIN.filter((x) => supportedChainMainnetAPI.has(x.chainId))
    : TEST_NET_CHAIN.filter((x) => supportedChainTestnetAPI.has(x.chainId));

export const inputStyles = {
  control: (base, state) => ({
    ...base,
    height: 48,
    border: 0,
    boxShadow: "none",
    paddingBottom: 1,
    fontWeight: "300",
    color: "#AAAAAA",
    fontFamily: "Poppins",
    fontSize: "14px",
    "&:hover": { backgroundColor: state.isFocused && "#363434" },
  }),
  option: (provided, state) => ({
    ...provided,
    color: "#AAAAAA",
    "&:hover": { backgroundColor: state.isFocused && "#363434" },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#FFFFFF",
    "&:hover": { color: "#FFFFFF" },
    // Custom colour
  }),
};

export const authMessage = `Nexa Network uses this cryptographic signature in place of a password, verifying that you are the owner of this address.`;

export const API_BASE_URL = process.env.REACT_APP_API_URL;

export const MORALIS_API = process.env.REACT_APP_MORALIS_KEY;

export const EVM_WALLETS = [
  {
    adapter: {
      name: "MetaMask",
      icon: "../assets/images/metamask1.svg",
    },
  },
];

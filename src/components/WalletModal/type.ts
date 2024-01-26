import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export interface WalletIconProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  wallet: any;
}

export enum TabId {
  CHAIN = "chain",
  WALLET = "wallet",
  CONNECTED = "CONNECT",
}

export interface ContributionTokens {
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  logoUri: string;
  conversionRateToUSD: string;
}
export interface ContributionChainListResponse {
  name: string;
  chainId: number;
  wormholeChainId: number;
  logoUri: string;
  hotWalletAddress: string;
  contractAddress: string;
  tokens: [ContributionTokens];
  rpcUrl: string;
}

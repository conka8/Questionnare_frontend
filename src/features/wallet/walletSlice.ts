import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IWallets {
  walletName: string;
  walletIcon: string;
  address: string;
  wallet: any;
  isSolanaWallet: boolean;
  chainId: number;
}

export interface WalletState {
  isWalletConnected: boolean;
  connectedWallets: Array<IWallets>;
}

const initialState: WalletState = {
  isWalletConnected: false,
  connectedWallets: [],
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    walletConnect: (state, action: PayloadAction<boolean>) => {
      state.isWalletConnected = action.payload;
    },
    setConnectedWallets: (state, action: PayloadAction<Array<IWallets>>) => {
      state.connectedWallets = action.payload;
    },
  },
});

export const { walletConnect, setConnectedWallets } = walletSlice.actions;
export const selectIsConnected = (state: RootState) =>
  state.wallet.isWalletConnected;

export const selectConnectedWallets = (state: RootState) =>
  state.wallet.connectedWallets;

export default walletSlice.reducer;

import { Provider } from "react-redux";
import { ThemeContextProvider } from "contexts/ThemeContext";
import { WagmiProvider } from "contexts/WagmiContext";
import { ModalProvider } from "widgets/Modal";
import { store } from "app/store";
import { RefreshContextProvider } from "contexts/RefreshContext";
import { SolanaWalletProvider } from "contexts/SolanaWalletContext";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <RefreshContextProvider>
          <WagmiProvider>
            <SolanaWalletProvider>
              <ModalProvider>{children}</ModalProvider>
            </SolanaWalletProvider>
          </WagmiProvider>
        </RefreshContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};

export default Providers;

import { Modal } from "widgets/Modal";
import { useEffect, useState } from "react";
import { ContinueButton, WalletWrapper } from "./styles";
import ChainBox from "./components/ChainBox";
import WalletBox from "./components/WalletBox";
import { Flex } from "components/Box";
import {
  SupportedChainId,
  solanaSupportiveChains,
} from "../../config/constants/chains";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSignMessage,
} from "wagmi";
import useViewport from "hooks/useViewport";
import {
  walletConnect,
  IWallets,
  setConnectedWallets,
  selectConnectedWallets,
} from "./../../features/wallet/walletSlice";
import { authMessage } from "config/constants";
import { useAppDispatch, useAppSelector } from "app/hooks";

import { WalletReadyState } from "@solana/wallet-adapter-base";
import { useSolanaWallet } from "contexts/SolanaWalletContext";
import { toastMessage } from "utils";

const WalletModal = ({ handleDismiss }) => {
  const dispatch = useAppDispatch();
  const connectedWallets = useAppSelector(selectConnectedWallets);
  const { width } = useViewport();
  const isMobile = width <= 990;
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();

  const [selectedChain, setSelectedChain] = useState<number | undefined>();
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [error, setError] = useState(false)

  const {
    select,
    connect: connectSolona,
    disconnect: disconnectSolana,
    connecting: solanaConnecting,
    signMessage: signMessageSolana,
    connected: solanWalletConnected,
    wallet: solanaWallet,
    publicKey,
  } = useSolanaWallet();

  const { signMessage, isLoading } = useSignMessage({
    message: authMessage,
    onSuccess() {
      const walletInfo: Array<IWallets> = [
        {
          walletIcon: "../assets/images/metamask1.svg",
          walletName: "MetaMask",
          address: address,
          chainId: chain?.id,
          wallet: chain,
          isSolanaWallet: false,
        },
        ...connectedWallets,
      ];

      dispatch(setConnectedWallets(walletInfo));
      dispatch(walletConnect(true));
      handleDismiss();
    },
    onError() {
      disconnect();
    },
  });
  const signAuthMessage = async () => {
    signMessage();
  };
  const {
    connect,
    connectors,
    pendingConnector,
    isLoading: isConnectingLoader,
  } = useConnect({
    chainId: selectedChain,
    onSuccess() {
      signAuthMessage();
    },
  });

  const handleSolanaConnection = async () => {
    if (signMessageSolana) {
      try {
        const enc = new TextEncoder();
        await signMessageSolana(enc.encode(authMessage));

        const walletInfo: Array<IWallets> = [
          {
            walletIcon: solanaWallet?.adapter?.icon,
            walletName: solanaWallet?.adapter?.name,
            address: publicKey.toString(),
            chainId: selectedChain,
            wallet: "Need to add solana wallet if required",
            isSolanaWallet: true,
          },
          ...connectedWallets,
        ];

        dispatch(setConnectedWallets(walletInfo));
        dispatch(walletConnect(true));
        handleDismiss();
      } catch (error) {
        await disconnectSolana();
        setError(true)
      }
    }
  };
  useEffect(() => {
    if (
      solanWalletConnected &&
      solanaWallet &&
      (selectedChain === SupportedChainId.SOLANA_DEV_NET ||
        selectedChain === SupportedChainId.SOLANA)
    ) {
      handleSolanaConnection();
    }
  }, [solanWalletConnected, solanaWallet]);

  return (
    <Modal
      hideCloseButton={false}
      onDismiss={handleDismiss}
      title={"Select a chain & wallet"}
      minWidth={"100%"}
      minHeight={"100%"}
    >
      <WalletWrapper>
        <Flex flexDirection={"column"} flex={1}>
          <ChainBox
            setSelectedChain={setSelectedChain}
            selectedChain={selectedChain}
            setSelectedWallet={setSelectedWallet}
          />
        </Flex>
        <Flex
          flexDirection={"column"}
          justifyContent={isMobile && "space-between"}
          flex={1}
        >
          <WalletBox
            selectedChain={selectedChain}
            setSelectedWallet={setSelectedWallet}
            error={error}
            setError={setError}
          />
          {connectors.map((connector) => (
            <ContinueButton
              isLoading={isLoading || isConnectingLoader || solanaConnecting}
              disabled={
                !connector.ready ||
                !selectedChain ||
                !selectedWallet?.adapter?.name
              }
              key={connector.id}
              onClick={async () => {
                if (solanaSupportiveChains.has(selectedChain)) {
                  if (selectedWallet?.adapter?.name === "MetaMask") {

                    toastMessage("Please select a wallet.", "info")

                    return;
                  }
                  if (
                    selectedWallet.readyState === WalletReadyState.Installed ||
                    selectedWallet.readyState === WalletReadyState.Loadable
                  ) {
                    // select(selectedWallet.adapter.name);
                    try {
                      await connectSolona();
                    } catch {
                      setError(true)
                    }
                  } else {
                    toastMessage("Please install selected wallet extension.", "info")
                  }
                  return;
                }

                connect({ connector });
              }}
            >
              Connect
              {!connector.ready && " (unsupported)"}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                " (connecting)"}
            </ContinueButton>
          ))}
        </Flex>
      </WalletWrapper>

    </Modal>
  );
};

export default WalletModal;

import { useEffect } from 'react'
import { Text } from "components/Text";
import { Box, Flex } from "../Box";
import useTheme from "../hooks/useTheme";
import {
  BackButton,
  BackButtonBox,
  BackgroundContainer,
  HeaderItems,
  LogoImage,
} from "./styles";
import Button from "components/Button";
import { WalletIcon } from "components/Svg";
import { useModal } from "widgets/Modal";
import WalletModal from "components/WalletModal";
import { truncateHash } from "utils";
import { useAccount, useNetwork } from "wagmi";
import useViewport from "hooks/useViewport";
import { Link, useHistory } from "react-router-dom";
import { ConnectedWalletModal } from "components/ConnectedWalletModal";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { IWallets, selectConnectedWallets, setConnectedWallets } from "features/wallet/walletSlice";
import {
  evmSupportiveChains,
  solanaSupportiveChains,
} from "config/constants/chains";
import { PublicKey } from '@solana/web3.js';
import getProvider from 'hooks/useSolanaProvider';
import { useSolanaWallet } from 'contexts/SolanaWalletContext';

const Header = () => {
  const { theme } = useTheme();
  const { width } = useViewport();
  const isMobile = width <= 990;
  const connectedWallets = useAppSelector(selectConnectedWallets);
  const { connector: activeConnector } = useAccount();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { wallet: solanaWallet } = useSolanaWallet();

  const [showWalletConnectModal, onDismiss] = useModal(
    <WalletModal handleDismiss={() => onDismiss()} />,
    true
  );

  const [showConnectedWalletModal, onDismissConnected] = useModal(
    <ConnectedWalletModal handleDismiss={() => onDismissConnected()} />,
    true
  );
  const { chain } = useNetwork();
  const provider = getProvider();

  useEffect(() => {
    const handleConnectorUpdate = ({ account }: any) => {
      if (account) {
        const evmAccountChanged = connectedWallets.findIndex((walletAdaptor) => !walletAdaptor.isSolanaWallet)
        if (evmAccountChanged != -1) {
          const walletInfo: Array<IWallets> = [...connectedWallets]
          walletInfo[evmAccountChanged] =
          {
            walletIcon: "../assets/images/metamask1.svg",
            walletName: "MetaMask",
            address: account,
            chainId: chain?.id,
            wallet: chain,
            isSolanaWallet: false,
          }
          dispatch(setConnectedWallets(walletInfo));
        }
      }
    };

    const handleSolanaConnectorUpdate = (publicKey: PublicKey) => {
      if (provider) {
        const solAccountChanged = connectedWallets.findIndex((walletAdaptor) => walletAdaptor.isSolanaWallet)
        if (solAccountChanged != -1) {
          const walletInfo: Array<IWallets> = [...connectedWallets]
          walletInfo[solAccountChanged] =
          {
            walletIcon: solanaWallet?.adapter?.icon,
            walletName: solanaWallet?.adapter?.name,
            address: publicKey.toString(),
            chainId: 102,
            wallet: "Need to add solana wallet if required",
            isSolanaWallet: true,
          }
          dispatch(setConnectedWallets(walletInfo));
        }
      }
    }

    if (activeConnector) {
      activeConnector.on("change", handleConnectorUpdate);
    }

    if (provider) {
      provider.on('accountChanged', handleSolanaConnectorUpdate)
    }

    return () => activeConnector?.off("change", handleConnectorUpdate) as any
  }, [activeConnector, connectedWallets, provider])

  return (
    <BackgroundContainer>
      <Flex
        width={"100%"}
        justifyContent={"center"}
        flexDirection={"column"}
        margin={"auto"}
        mb={"30px"}
        mt={"30px"}
      >
        <HeaderItems className="risponsive-logo-topbar" tabIndex={-1}>
          <Flex>
            <Link
              to={{ pathname: "https://www.nexa.network/" }}
              target="_blank"
            >
              <LogoImage
                src={
                  theme?.isDark
                    ? "../assets/images/Brandlockup.svg"
                    : "../assets/images/logo-light.png"
                }
                alt={"logo"}
              />
            </Link>
          </Flex>
          <Flex alignItems={"center"}>
            {connectedWallets?.length > 0 ? (
              <>
                {(connectedWallets.find((item) =>
                  solanaSupportiveChains.has(item.chainId)
                ) === undefined ||
                  connectedWallets.find((item) =>
                    evmSupportiveChains.has(item.chainId)
                  ) === undefined) && (
                    <Box marginRight={"15px"}>
                      <Button
                        height={"49px"}
                        width={"100px"}
                        type={"button"}
                        variant={"tertiary"}
                        onClick={() => {
                          showWalletConnectModal();
                        }}
                      >
                        <Flex justifyContent={"center"}>
                          <WalletIcon
                            iconTheme={"light"}
                            width={"16px"}
                            height={"16px"}
                          />
                          <Text
                            fontWeight={theme.fonts.semiBold}
                            fontSize={"16px"}
                            ml={"6px"}
                          >
                            Add
                          </Text>
                        </Flex>
                      </Button>
                    </Box>
                  )}

                {connectedWallets?.map((wallets, index) => (
                  <BackButtonBox
                    width={isMobile ? "300px" : "190px"}
                    key={index}
                    ml={'15px'}
                  >
                    <BackButton
                      onClick={showConnectedWalletModal}
                      borderRadius={"4px"}
                    >
                      <Box className="inner">
                        <img
                          src={wallets?.walletIcon}
                          width={"25px"}
                          height={"25px"}
                          alt=""
                        />
                        {/* <WalletIcon mr={"5px"} /> */}
                        <Text
                          fontWeight={theme.fonts.semiBold}
                          fontSize={"16px"}
                          ml={"6px"}
                        >
                          {" "}
                          {truncateHash(wallets?.address, 5)}
                        </Text>
                      </Box>
                    </BackButton>
                  </BackButtonBox>
                ))}
              </>
            ) : (
              <Box>
                <Button
                  height={"40px"}
                  width={"179px"}
                  type={"button"}
                  variant={"tertiary"}
                  onClick={() => {
                    showWalletConnectModal();
                  }}
                >
                  <Flex justifyContent={"center"}>
                    <WalletIcon
                      iconTheme={"light"}
                      width={"16px"}
                      height={"16px"}
                    />
                    <Text
                      fontWeight={theme.fonts.semiBold}
                      fontSize={"16px"}
                      ml={"6px"}
                    >
                      Connect wallet
                    </Text>
                  </Flex>
                </Button>
              </Box>
            )}
          </Flex>
        </HeaderItems>
      </Flex>
    </BackgroundContainer>
  );
};

export default Header;

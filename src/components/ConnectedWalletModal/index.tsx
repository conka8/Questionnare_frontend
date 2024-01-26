import { useAppDispatch, useAppSelector } from "app/hooks";
import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { WalletWrapper } from "components/WalletModal/styles";
import { ChainArray } from "config/constants";
import { CHAIN_IDS_TO_NAMES } from "config/constants/chains";
import {
    selectConnectedWallets,
    setConnectedWallets,
    walletConnect,
} from "features/wallet/walletSlice";
import useViewport from "hooks/useViewport";
import { useEffect, useState } from "react";
import useTheme from "hooks/useTheme";
import { useDisconnect } from "wagmi";
import { Modal } from "widgets/Modal";
import {
    CircleCheckedIcon,
    CopyIcon,
    DisconnectIcon,
    WalletIcon as WalletIconSVG,
} from "components/Svg";
import { useSolanaWallet } from "contexts/SolanaWalletContext";
import { copyToClipboard } from "utils";

export const ConnectedWalletModal = ({ handleDismiss }) => {
    const dispatch = useAppDispatch();
    const connectedWallets = useAppSelector(selectConnectedWallets);
    const { width } = useViewport();
    const isMobile = width <= 990;
    const [copied, setCopied] = useState<boolean>(false);
    const { theme } = useTheme();
    const { disconnect } = useDisconnect();
    const [selectedIndex, setSelctedIndex] = useState<Number>(null);

    const { disconnect: disconnectSolana } = useSolanaWallet();

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }
    }, [copied]);

    return (
        <Modal
            hideCloseButton={false}
            onDismiss={handleDismiss}
            title={"Wallet & Chain"}
            minWidth={"100%"}
            minHeight={"100%"}
        >
            <Flex mt={"59px"} flexDirection={"column"}>
                {connectedWallets?.map((wallet, index) => (
                    <WalletWrapper
                        className={"wallet-wrapper"}
                        alignItems={"center"}
                        key={wallet?.chainId}
                    >
                        <Flex className="border-none">
                            <Flex
                                className="inner inner-wallet"
                                minHeight={"0"}
                                flexDirection={"row"}
                                alignItems={"center"}
                            >
                                <Box className="svg-icon">
                                    <img
                                        src={wallet?.walletIcon}
                                        width={"40px"}
                                        height={"40px"}
                                        alt=""
                                    />
                                </Box>
                                <Text
                                    fontFamily={theme.fonts.primary}
                                    fontSize={"16px"}
                                    fontWeight={theme.fonts.medium}
                                    color={theme.colors.text}
                                    ml={"0.6rem"}
                                >
                                    {wallet?.walletName}
                                </Text>
                            </Flex>
                            <Flex
                                className="inner inner-wallet border-none"
                                minHeight={"0"}
                                flexDirection={"row"}
                                alignItems={"center"}
                            >
                                <Box className="svg-icon">
                                    {
                                        ChainArray?.find(
                                            (chainItem) => wallet.chainId === chainItem?.chainId
                                        )?.icon
                                    }
                                </Box>
                                <Text
                                    fontFamily={theme.fonts.primary}
                                    fontSize={"14px"}
                                    fontWeight={theme.fonts.light}
                                    color={theme.colors.text}
                                    ml={"0.6rem"}
                                >
                                    {CHAIN_IDS_TO_NAMES[wallet.chainId]}
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            className="border-none wallet-icon"
                            borderRadius={"8px"}
                            justifyContent={"start"}
                            alignItems={"center"}
                            height={"40px"}
                            width={"430px"}
                            marginRight={"20px !important"}
                            background={`${theme.colors.backgroundAlt}80`}
                            p={"0.4rem"}
                        >
                            <WalletIconSVG />{" "}
                            <Text
                                color={theme.colors.textDisabled}
                                fontSize={"14px"}
                                lineHeight={"1.3"}
                                ml={"0.4rem"}
                                className="address-styles"
                            >
                                {wallet?.address}
                            </Text>
                        </Flex>
                        <Flex className="border-none" flexDirection={"column"} py={"1px"}>
                            <Flex
                                width={"100%"}
                                alignItems={"center"}
                                justifyContent={isMobile ? "space-between" : "center"}
                            >
                                <Flex
                                    flexDirection={"row"}
                                    alignItems={"center"}
                                    role={"button"}
                                    height={"100%"}
                                    minWidth={"100px"}
                                    onClick={() => {
                                        copyToClipboard(wallet?.address);
                                        setCopied(true);
                                        setSelctedIndex(index);
                                    }}
                                >
                                    {selectedIndex === index && copied ? (
                                        <CircleCheckedIcon fill={"none"} mr={"5px"} height={"20"} />
                                    ) : (
                                        <CopyIcon
                                            stroke={"#4276FF"}
                                            mr={"5px"}
                                            width={"20"}
                                            height={"20"}
                                        />
                                    )}
                                    <Text
                                        fontSize={"x-small"}
                                        className={
                                            selectedIndex === index && copied
                                                ? "copied-color"
                                                : "text-color"
                                        }
                                    >
                                        {selectedIndex === index && copied ? "Copied" : "Copy"}
                                    </Text>
                                </Flex>

                                <Flex
                                    flexDirection={"row"}
                                    alignItems={"center"}
                                    mx={isMobile ? "0" : "0.4rem"}
                                    role={"button"}
                                    className="disconnet-btn pointer"
                                    onClick={async () => {
                                        if (wallet?.isSolanaWallet) {
                                            await disconnectSolana();
                                        } else {
                                            await disconnect();
                                        }

                                        const activeWallets = connectedWallets.filter(
                                            (item) => item.chainId !== wallet.chainId
                                        );
                                        dispatch(setConnectedWallets(activeWallets));
                                        dispatch(walletConnect(false));

                                        if (activeWallets.length === 0) handleDismiss();
                                    }}
                                >
                                    <DisconnectIcon width={"30"} height={"30"} />
                                    <Text>Disconnect</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </WalletWrapper>
                ))}
            </Flex>
        </Modal>
    );
};
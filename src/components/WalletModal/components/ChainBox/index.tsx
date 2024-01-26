import { Box, Flex } from "components/Box";
import { ChainWrapper } from "components/WalletModal/styles";
import { Text } from "components/Text";
import useTheme from "hooks/useTheme";
import useViewport from "hooks/useViewport";
import { ChainArray } from "config/constants";
import { SupportedChainId, evmSupportiveChains } from "config/constants/chains";
import { useAppSelector } from "app/hooks";
import { selectConnectedWallets } from "features/wallet/walletSlice";
import { useEffect, useMemo } from "react";

const ChainBox = ({ setSelectedChain, selectedChain, setSelectedWallet }) => {
  const { theme } = useTheme();
  const { width } = useViewport();
  const isMobile = width <= 990;
  const connectedWallets = useAppSelector(selectConnectedWallets);

  const filteredChainArray = [];
  const disableChains = useMemo(() => ChainArray.map((chain) => {
    if (
      connectedWallets.length === 0 ||
      connectedWallets.find((item) => item.isSolanaWallet !== chain.isSolana)) {
      filteredChainArray.push(chain)
    }
    return connectedWallets?.some(connectedChain => connectedChain.isSolanaWallet === chain.isSolana)
  }), [])

  useEffect(() => {
    if (
      filteredChainArray.length === 1 &&
      filteredChainArray[0].isSolana === true
    ) {
      setSelectedChain(filteredChainArray[0].chainId);
    }
  }, [filteredChainArray]);

  return (
    <Flex alignItems={"center"} width={"100%"} flexWrap={"wrap"}>
      {ChainArray?.map((networkChain, index) => {
        return (
          <Flex width={isMobile ? "160px" : "180px"} key={index}>
            <ChainWrapper
              onClick={() => {
                // if (!evmSupportiveChains.has(selectedChain)) {
                //   setSelectedWallet(null);
                // }
                setSelectedChain(networkChain.chainId);
              }}
              className={selectedChain === networkChain.chainId && "checked"}
              isSelected={selectedChain === SupportedChainId.OPTIMISM}
              isDisabled={disableChains[index]}
            >
              <Flex
                className="inner"
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Box className="svg-icon">{networkChain.icon}</Box>
                <Text
                  fontFamily={theme.fonts.primary}
                  fontSize={isMobile ? "14px" : "16px"}
                  fontWeight={theme.fonts.medium}
                  color={theme.colors.text}
                  ml={"0.6rem"}
                  lineHeight={"24px"}
                >
                  {networkChain?.name}
                </Text>
              </Flex>
            </ChainWrapper>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default ChainBox;

import { Box, Flex } from "components/Box";
import { ChainWrapper } from "components/WalletModal/styles";
import { Text } from "components/Text";
import useTheme from "hooks/useTheme";
import { useSolanaWallet } from "contexts/SolanaWalletContext";
import { useEffect, useState } from "react";
import { solanaSupportiveChains } from "config/constants/chains";
import { WalletIconProps } from "components/WalletModal/type";
import Image from "components/Image";
import { EVM_WALLETS } from "config/constants";

const WalletBox = ({ selectedChain, setSelectedWallet, error, setError }) => {
  const { theme } = useTheme();

  const { wallets: solanaWallets, select } = useSolanaWallet();
  const solanaChainSelected = solanaSupportiveChains.has(selectedChain)
  const [selectedWallet, setSelected] = useState<any>(EVM_WALLETS[0]);

  useEffect(() => {
    if (error) {
      setSelected(solanaWallets[0])
      setError(false)
    }
    const selectedAdapter = solanaChainSelected ? solanaWallets[0] : EVM_WALLETS[0]
    setSelected(selectedAdapter);
    if (solanaChainSelected) {
      select(solanaWallets[0].adapter.name)
    }
    setSelectedWallet(selectedAdapter)
  }, [selectedChain, error]);

  //List of wallets For Solana
  const SolanaWalletRow = () => {
    return (
      <Flex mb={"30px"}>
        {solanaWallets.map((item, index) => (
          <ChainWrapper
            key={index}
            flexDirection={"column"}
            alignItems={"center"}
            className={
              selectedWallet.adapter.name === item?.adapter?.name
                ? "selected pointer"
                : "pointer"
            }
            mt="12px"
            onClick={async () => {
              select(item.adapter.name);
              setSelected(item as any);
            }}
          >
            <Flex
              className="inner"
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Box className="svg-icon">
                <WalletIcon wallet={item?.adapter?.icon} />
              </Box>
              <Text
                fontFamily={theme.fonts.primary}
                fontSize={"11px"}
                fontWeight={theme.fonts.regular}
                color={theme.colors.textSubtle}
                mt={"0.6rem"}
              >
                {item?.adapter?.name}
              </Text>
            </Flex>
          </ChainWrapper>
        ))}
      </Flex>
    );
  };

  const EvmWalletRow = () => {
    return (
      <Flex mb={"30px"}>
        <ChainWrapper
          flexDirection={"column"}
          alignItems={"center"}
          className={
            selectedWallet.adapter.name === "MetaMask"
              ? "selected pointer"
              : "pointer"
          }
          mt="12px"
          onClick={async () => {
            setSelected({
              adapter: {
                name: "MetaMask",
              },
            });
          }}
        >
          <Flex
            className="inner"
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box className="svg-icon">
              <img
                src={"../assets/images/metamask1.svg"}
                width={"40px"}
                height={"40px"}
                alt=""
              />
            </Box>
            <Text
              fontFamily={theme.fonts.primary}
              fontSize={"11px"}
              fontWeight={theme.fonts.regular}
              color={theme.colors.textSubtle}
            >
              MetaMask
            </Text>
          </Flex>
        </ChainWrapper>
      </Flex>
    );
  };

  return (
    <Flex mb={"30px"}>
      {solanaSupportiveChains.has(selectedChain) ? (
        <SolanaWalletRow />
      ) : (
        <EvmWalletRow />
      )}
    </Flex>
  );
};

const WalletIcon: React.FC<WalletIconProps> = ({ wallet }) => {
  return (
    wallet && (
      <Image src={wallet} width={"40px"} height={"40px"} />
    )
  );
};

export default WalletBox;

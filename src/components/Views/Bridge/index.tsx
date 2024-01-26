import { Box, Flex } from "components/Box";
import Button from "components/Button";
import Spinner from "components/SpinnerCircle";
import { Text } from "components/Text";
import { ChainArray, inputStyles } from "config/constants";
import { useEffect, useMemo, useState } from "react";
import Select, { components } from "react-select";
import {
  handleDecimals,
  toastMessage,
} from "utils";
import {
  useAccount,
  useBalance,
  useNetwork,
  useSwitchNetwork,
  useFeeData,
} from "wagmi";
import useTheme from "../../hooks/useTheme";
import { InnerSection, Input, MainContainer } from "./styles";
import {
  evmSupportiveChains,
  solanaSupportiveChains,
  CHAIN_ID_TO_TOKEN_ADDRESS,
  tokenAddress,
  SupportedChainId,
  totalBlockConfirmations,
} from "config/constants/chains";
import BridgeModal from "./components/BridgeModal";
import { useModal } from "widgets/Modal";
import { useHandleBridge } from "./utils";
import { useSolanaConnection, useSolanaWallet } from "contexts/SolanaWalletContext";
import useSolanaBalance from "components/hooks/useSolanaBalance";
import {
  TOKEN_PROGRAM_ID
} from "@solana/spl-token"
import { ADDRESS_TXN_EXPLORER_LINK } from "config/constants/endpoints";
import { BigNumber } from "bignumber.js";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { IWallets, selectConnectedWallets, setConnectedWallets } from "features/wallet/walletSlice";
import ProgressBar from "@ramonak/react-progress-bar";
import { SelectOptions } from "config/types";

const IconOption = (props) => {
  const { Option } = components;
  return (
    <Option className="chain-options" {...props}>
      <Box className="svg-icon" mr={"5px"}>
        {props.data.icon}
      </Box>
      {props.data.label}
    </Option>
  );
};

const SingleValue = (props) => (
  <Flex alignItems={"center"}>
    <Box className="select-svg-icon" mt={"7px"} mr={"5px"}>
      {props.data.icon}
    </Box>
    {props.data.label}
  </Flex>
);

const Bridge = () => {
  const { theme } = useTheme();
  const [supportedBlockChains, setSupportedBlockChains] = useState<Array<SelectOptions>>([]);
  const [amount, setAmount] = useState<string | null>("");
  const [selectedToChain, setSelectedToChain] = useState<SelectOptions | null>();
  const [selectedFromChain, setSelectedFromChain] = useState<SelectOptions | null>();
  const [txHash, setTxHash] = useState("");
  const [explorerLink, setExplorerLink] = useState("");
  const [isTransactionOccuring, setIsTransactionOccuring] = useState(false);
  const [isChainChanged, setIsChainChanged] = useState<boolean>(false);
  const [evmFee, setEVMFee] = useState<string>()
  const { data: feeData, isError, isLoading } = useFeeData({ formatUnits: 'gwei' })
  const { switchNetworkAsync, isLoading: switchNetworkLoading } = useSwitchNetwork();
  const dispatch = useAppDispatch();
  const connectedWallets = useAppSelector(selectConnectedWallets);

  const solFee: string = "0.001";
  const [showBridgeModal, onDismissBridgeModal] = useModal(
    <BridgeModal
      handleDismiss={() => {
        setExplorerLink("");
        setTxHash("");
        setAmount("");
        onDismissBridgeModal();
        setSelectedToChain(null);
        setSelectedFromChain(null);
      }}
      fromChain={selectedFromChain}
      toChain={selectedToChain}
      explorerLink={explorerLink}
      txHash={txHash}
    />,
    true
  );

  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const [currentBlock, setCurrentBlock] = useState<any>();

  const { data: balanceFromChain } = useBalance({
    address,
    chainId: selectedFromChain?.value,
  });

  const { data: balanceToChain } = useBalance({
    address,
    chainId: selectedToChain?.value,
  })

  const { connected: solanaConnected, publicKey, sendTransaction: sendSolanaTx } = useSolanaWallet();
  const { solanaBalance, solanaBalanceFormatted } = useSolanaBalance();
  const { connection: solanaConnection } = useSolanaConnection();
  const { data: transferChainBalanceData, isLoading: isBalanceLoading } =
    useBalance({
      address,
      chainId: selectedFromChain?.value,
      token: CHAIN_ID_TO_TOKEN_ADDRESS[selectedFromChain?.value]?.toString()
    });
  const [solTokenBalance, setSolTokenBalance] = useState<string>("")

  const isFromChainSolana = useMemo(() => solanaSupportiveChains.has(selectedFromChain?.value), [selectedFromChain?.value]);
  const isToChainSolana = useMemo(() => solanaSupportiveChains.has(selectedToChain?.value), [selectedToChain?.value]);

  const isValid: boolean =
    !!selectedFromChain &&
    !!selectedToChain &&
    !!amount && amount !== '0' &&
    !!(isFromChainSolana ? +amount <= +solTokenBalance : +amount <= +transferChainBalanceData?.formatted) &&
    !!(isFromChainSolana ? (solanaBalance > solFee) : (balanceFromChain?.formatted > evmFee)) &&
    !!(evmSupportiveChains.has(selectedFromChain?.value) && evmSupportiveChains.has(selectedToChain?.value) ? isConnected : (isConnected && solanaConnected))

  useEffect(() => {
    if (isChainChanged === true && chain?.id === selectedFromChain.value) {
      setIsChainChanged(false);
    }
  }, [isChainChanged, chain]);

  useEffect(() => {
    const selectedTokenChains = [];
    ChainArray.forEach((item) => {
      selectedTokenChains.push({
        value: item.chainId,
        label: item.name,
        icon: item.icon,
        address: "0x1a050db4C7f005e0115130576c73be47c38AFFf8",
      });
      return selectedTokenChains;
    })
    setSupportedBlockChains(selectedTokenChains);
  }, [])

  useEffect(() => {
    if (isConnected && solanaConnected) {
      return;
    }
    if (chain?.id) {
      const selectedOpt = supportedBlockChains.find((x) => x.value === chain?.id);
      if (selectedOpt) setSelectedFromChain(selectedOpt);
    }
    if (!chain?.id && solanaConnected) {
      const selectedOpt = supportedBlockChains.find((x) => x.value === SupportedChainId.SOLANA);
      if (selectedOpt) setSelectedFromChain(selectedOpt);
    }
    if (!chain?.id && !solanaConnected) {
      setSelectedFromChain(null);
    }
  }, [isConnected, solanaConnected]);

  useEffect(() => {
    const solanaSPLTokenBalance = async () => {
      const tokenFilter = {
        programId: TOKEN_PROGRAM_ID,
      };

      let results = await solanaConnection.getParsedTokenAccountsByOwner(
        publicKey,
        tokenFilter
      );
      let initialSolanaBalance: number = 0;
      for (const item of results.value) {
        const tokenInfo = item.account.data.parsed.info;
        const address = tokenInfo.mint;
        const amount = tokenInfo.tokenAmount.uiAmount;
        if (tokenInfo.mint === tokenAddress?.solana) {
          initialSolanaBalance = amount;
        }
      }
      setSolTokenBalance(initialSolanaBalance.toString())
    }
    solanaConnected && solanaSPLTokenBalance();
  }, [solanaConnected, selectedFromChain])

  useEffect(() => {
    if (isConnected) {
      const ethFee = BigNumber(feeData?.gasPrice.toString()).multipliedBy(BigNumber(300000)).dividedBy(BigNumber(10).pow(18));
      setEVMFee(ethFee.toFixed(6))
    }
  }, [isConnected, isLoading, selectedFromChain, selectedToChain]);

  const checkIfChainSwitchIsNeeded = async (choice, chainSource?: string) => {
    if (solanaSupportiveChains.has(choice?.value)) {
      if (chainSource == "from") setSelectedFromChain(choice);
      else setSelectedToChain(choice);
    }
    else {
      if (chain && choice && chain?.id !== choice?.value) {
        try {
          const { id, name, contracts, blockExplorers, nativeCurrency, network, rpcUrls } = await switchNetworkAsync(choice.value);
          const switchedChain = {
            blockExplorers: blockExplorers,
            contracts: contracts,
            id: id,
            name: name,
            nativeCurrency: nativeCurrency,
            network: network,
            rpcUrls: rpcUrls
          }
          const evmAccountChanged = connectedWallets.findIndex((walletAdaptor) => !walletAdaptor.isSolanaWallet)
          const walletInfo: Array<IWallets> = [...connectedWallets]
          walletInfo[evmAccountChanged] =
          {
            walletIcon: "../assets/images/metamask1.svg",
            walletName: "MetaMask",
            address: address,
            chainId: id,
            wallet: switchedChain,
            isSolanaWallet: false,
          }
          dispatch(setConnectedWallets(walletInfo));
        } catch (error) {
          toastMessage("User rejected the transaction.", "error");
          return;
        }
      }
      if (chainSource == "from") setSelectedFromChain(choice);
      else setSelectedToChain(choice);
    }
  };

  useEffect(() => {
    if (explorerLink) {
      showBridgeModal();
    }
  }, [explorerLink]);

  const isWalletConnected = (selectedChain: number) => {
    if (evmSupportiveChains.has(selectedChain) && !isConnected) {
      toastMessage("To continue, Please connect EVM wallet.", "error")
    }
    else if (solanaSupportiveChains.has(selectedChain) && !solanaConnected) {
      toastMessage("To continue, Please connect solana wallet.", "error")
    }
  }

  const { EVMtoSOL, SOLtoEVM, EvmToEvm } = useHandleBridge(selectedFromChain, selectedToChain, amount, setCurrentBlock)
  const Bridge = async () => {
    try {
      setIsTransactionOccuring(true)
      if (evmSupportiveChains.has(selectedFromChain?.value) && isToChainSolana) {
        const txConfirmed = await EVMtoSOL()
        setExplorerLink(`${ADDRESS_TXN_EXPLORER_LINK[selectedToChain?.value]}${txConfirmed}`)
        setTxHash(txConfirmed)
        setIsTransactionOccuring(false)
      }
      else if (isFromChainSolana && evmSupportiveChains.has(selectedToChain?.value)) {
        const txConfirmed = await SOLtoEVM()
        setExplorerLink(`${ADDRESS_TXN_EXPLORER_LINK[selectedToChain?.value]}${txConfirmed?.transactionHash}`)
        setTxHash(txConfirmed?.transactionHash)
        setIsTransactionOccuring(false)
      }
      else {
        const txConfirmed = await EvmToEvm()
        setExplorerLink(`${ADDRESS_TXN_EXPLORER_LINK[selectedToChain?.value]}${txConfirmed?.transactionHash}`)
        setTxHash(txConfirmed?.transactionHash)
        setIsTransactionOccuring(false)
      }
    }
    catch (error) {
      setIsTransactionOccuring(false)
    } finally {
      setAmount("")
      setCurrentBlock(undefined)
    }
  }

  return (
    <MainContainer>
      <InnerSection>
        <Flex justifyContent={"space-around"}>
          <Text
            fontFamily={theme.fonts.primary}
            fontWeight={theme.fonts.semiBold}
            fontSize={"32px"}
          >
            Bridge
          </Text>
        </Flex>
        <Flex justifyContent={"space-around"} mt={"21px"}>
          <Text
            fontFamily={theme.fonts.primary}
            fontStyle={"normal"}
            fontWeight={theme.fonts.light}
            fontSize={"14px"}
          >
            Migrate your tokens across chains
          </Text>
        </Flex>
        <Flex flexWrap={"wrap"}>
          <Flex mt={"10px"} width={"50%"} flexDirection={"column"}>
            <Flex mt={"16px"} ml={"10px"} mb={"8px"}>
              <Text
                fontFamily={theme.fonts.primary}
                fontWeight={theme.fonts.light}
                fontSize={"14px"}
              >
                From
              </Text>
            </Flex>
            <Flex width={"90%"}>
              <Select
                isClearable
                className="select-main-container"
                name="form-field-name"
                placeholder={"Select"}
                options={supportedBlockChains.filter(
                  (x) => x.value !== selectedToChain?.value
                )}
                value={selectedFromChain}
                onChange={(choice) => { isWalletConnected(choice?.value); checkIfChainSwitchIsNeeded(choice, "from") }}
                components={{
                  Option: IconOption,
                  SingleValue,
                  IndicatorSeparator: () => null,
                }}
                styles={inputStyles}
              />
            </Flex>
          </Flex>

          <Flex mt={"10px"} width={"50%"} flexDirection={"column"}>
            <Flex mt={"16px"} ml={"10px"} mb={"8px"}>
              <Text
                fontFamily={theme.fonts.primary}
                fontWeight={theme.fonts.light}
                fontSize={"14px"}
              >
                To
              </Text>
            </Flex>
            <Flex>
              <Select
                isClearable
                className="select-main-container"
                name="form-field-name"
                options={supportedBlockChains.filter(
                  (x) => x.value !== selectedFromChain?.value
                )}
                placeholder={"Select"}
                value={selectedToChain}
                onChange={(choice) => { isWalletConnected(choice?.value); isFromChainSolana ? checkIfChainSwitchIsNeeded(choice) : setSelectedToChain(choice) }}
                components={{
                  Option: IconOption,
                  SingleValue,
                  IndicatorSeparator: () => null,
                }}
                styles={inputStyles}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex mt={"10px"}>
          <Flex flexDirection={"column"} width={"100%"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Text
                mt={"16px"}
                ml={"10px"}
                mb={"10px"}
                fontFamily={theme.fonts.primary}
                fontWeight={theme.fonts.light}
                fontSize={"14px"}
              >
                Token amount
              </Text>

              {isBalanceLoading && (
                <Flex mt={"15px"} mr={"10px"}>
                  <Spinner radius={7} />
                </Flex>
              )}
              {selectedFromChain?.address &&
                (transferChainBalanceData?.formatted || solTokenBalance) && (
                  <Text
                    fontFamily={theme.fonts.primary}
                    fontWeight={theme.fonts.light}
                    color={theme.colors.textDisabled}
                    fontSize={"11px"}
                    mt={"25px"}
                  >
                    {`Available: ${isFromChainSolana ? solTokenBalance :
                      +parseFloat(
                        transferChainBalanceData?.formatted
                      ).toFixed(2)
                      } 
                    tokens`}
                  </Text>
                )}
            </Flex>
            <Input
              type="number"
              onWheel={(event) => event.currentTarget.blur()}
              padding={"0px 17px"}
              className="token-amount"
              placeholder="Enter token amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={amount}
            />
          </Flex>
        </Flex>
        <Flex flexWrap={"wrap"}>
          <Flex mt={"10px"} width={"100%"} flexDirection={"column"}>
            <Flex mt={"16px"} mb={"0px"} justifyContent={"space-between"}>
              <Text
                fontFamily={theme.fonts.primary}
                fontWeight={theme.fonts.light}
                fontSize={"14px"}
              >
                Required balance:
              </Text>
              <Flex>
                <Text
                  fontFamily={theme.fonts.primary}
                  fontWeight={theme.fonts.light}
                  fontSize={"14px"}
                  color={
                    (isConnected && selectedFromChain && selectedToChain)
                      ? (isFromChainSolana ? (solanaBalance > solFee) : parseFloat(balanceFromChain?.formatted) > +evmFee)
                        ? theme.colors.success
                        : theme.colors.failure
                      : ""
                  }
                >
                  {(isConnected && selectedFromChain && selectedToChain && !isLoading && !switchNetworkLoading) ? (isFromChainSolana ? (`${solFee} SOL`) : (`${evmFee} ${balanceFromChain?.symbol}`))
                    : (
                      ""
                    )}
                </Text>
                {(isFromChainSolana || isToChainSolana) &&
                  <Text
                    fontFamily={theme.fonts.primary}
                    fontWeight={theme.fonts.light}
                    fontSize={"14px"}
                    ml={"10px"}
                    color={
                      (isConnected && selectedFromChain && selectedToChain)
                        ? (isToChainSolana ? (solanaBalance > solFee) : parseFloat(balanceToChain?.formatted) > +evmFee)
                          ? theme.colors.success
                          : theme.colors.failure
                        : ""
                    }
                  >
                    {isConnected && switchNetworkLoading ? (
                      <Spinner radius={8} />
                    ) : (isConnected && selectedFromChain && selectedToChain && !isLoading) ? (isToChainSolana ? (`${solFee} SOL`) : (`${evmFee} ${balanceToChain?.symbol}`))
                      : (
                        "-"
                      )}
                  </Text>
                }
              </Flex>
            </Flex>
          </Flex>

          <Flex mt={"10px"} width={"100%"} flexDirection={"column"}>
            <Flex mt={"16px"} mb={"0px"} justifyContent={"space-between"}>
              <Text
                fontFamily={theme.fonts.primary}
                fontWeight={theme.fonts.light}
                fontSize={"14px"}
              >
                Available balance:
              </Text>
              <Text
                fontFamily={theme.fonts.primary}
                fontWeight={theme.fonts.light}
                color={theme.colors.textDisabled}
                fontSize={"14px"}
              >
                {isConnected && switchNetworkLoading ? (
                  <Spinner radius={8} />
                ) : solanaConnected && isFromChainSolana ? solanaBalanceFormatted : isConnected && balanceFromChain?.formatted ? (
                  `${handleDecimals(+balanceFromChain?.formatted)} ${balanceFromChain?.symbol
                  }`
                ) : (
                  "-"
                )}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {currentBlock !== undefined && isValid &&
          <Flex mt={"21px"}>
            <ProgressBar
              bgColor="#518CFF"
              baseBgColor="#201D1D"
              className="progress"
              labelClassName="labelStyles"
              height="7px"
              customLabel={`${currentBlock >= totalBlockConfirmations[selectedFromChain?.value] ? totalBlockConfirmations[selectedFromChain?.value] : currentBlock} / ${totalBlockConfirmations[selectedFromChain?.value]} block confirmations`}
              labelAlignment="outside"
              completed={currentBlock}
              maxCompleted={totalBlockConfirmations[selectedFromChain?.value]} />
          </Flex>
        }
        <Flex justifyContent={"space-around"} mt={"21px"}>
          <Box width={"100%"}>
            <Button
              height={"44px"}
              width={"478px"}
              type={"button"}
              variant={"tertiary"}
              onClick={() => Bridge()}
              disabled={
                !isValid
              }
              isLoading={isTransactionOccuring}
            >
              <Flex justifyContent={"center"}>
                <Text
                  fontWeight={theme.fonts.semiBold}
                  fontSize={"14px"}
                  ml={"6px"}
                >
                  {isTransactionOccuring ? (
                    <Spinner radius={8} />
                  ) : (
                    "Migrate"
                  )}
                </Text>
              </Flex>
            </Button>
          </Box>
        </Flex>
      </InnerSection>
    </MainContainer>
  );
};

export default Bridge;

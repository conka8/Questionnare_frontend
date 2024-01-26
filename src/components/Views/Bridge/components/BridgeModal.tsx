import { Box, Flex } from "components/Box";
import { Modal } from "widgets/Modal";
import styled, { keyframes } from "styled-components";
import { Text } from "components/Text";
import useTheme from "../../../hooks/useTheme";
import Button from "components/Button";
import { CheckedIcon, CircleCheckedIcon, CopyIcon } from "components/Svg";
import { copyToClipboard, truncateAddress } from "utils";
import { useEffect, useState } from "react";

const DottedLine = styled.div`
  border-top: 4px dotted #2b96dc;
  width: 300px;
  margin: 40px 20px;
`;

const BridgeModal = ({ handleDismiss, fromChain, toChain, explorerLink, txHash }) => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

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
      title={""}
      minWidth={"100%"}
      minHeight={"100%"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          fontFamily={theme.fonts.primary}
          fontWeight={theme.fonts.bold}
          fontSize={"30px"}
          mb="40px"
        >
          Bridged Out
        </Text>
        <CheckedIcon
          height={"40px"}
          width="40px"
          color={theme.colors.success}
        />
        <Flex
          mt="40px"
          mb="40px"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Box className="select-svg-icon">{fromChain?.icon}</Box>
            <Text
              fontFamily={theme.fonts.primary}
              fontWeight={theme.fonts.light}
              fontSize={"14px"}
            >
              {fromChain?.label}
            </Text>
          </Flex>
          <DottedLine />
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Box className="select-svg-icon">{toChain?.icon}</Box>
            <Text
              fontFamily={theme.fonts.primary}
              fontWeight={theme.fonts.light}
              fontSize={"14px"}
            >
              {toChain?.label}
            </Text>
          </Flex>
        </Flex>
        <Flex mb={'20px'} ml={'80px'} alignItems={'center'} justifyContent={'center'}>
          <Text mr={'8px'} fontSize="16px">{"Transaction hash:"}</Text>
          <Flex background={`${theme.colors.backgroundAlt}80`} borderRadius={'5px'}>
            <Text m={'3px 8px 3px 8px'} fontSize="16px">{truncateAddress(txHash)}</Text>
          </Flex>
          <Flex
            flexDirection={"row"}
            alignItems={"center"}
            role={"button"}
            height={"100%"}
            minWidth={"100px"}
            ml={'5px'}
            onClick={() => {
              copyToClipboard(txHash);
              setCopied(true);
            }}
          >
            {copied ? (
              <CircleCheckedIcon fill={"none"} mr={"5px"} height={"20"} />
            ) : (
              <CopyIcon
                stroke={"#4276FF"}
                mr={"5px"}
                width={"25"}
                height={"25"}
              />
            )}
          </Flex>
        </Flex>

        <Button
          height={"44px"}
          width={"478px"}
          type={"button"}
          variant={"tertiary"}
          onClick={() => {
            window.open(explorerLink, "_blank");
          }}
        >
          View On Explorer
        </Button>
      </Flex>
    </Modal>
  );
};

export default BridgeModal;

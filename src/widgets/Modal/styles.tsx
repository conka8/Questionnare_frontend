import React, { ReactNode } from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ModalProps } from "./types";

import { IoMdArrowRoundBack } from "react-icons/io";

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: ${({ background }) => background || "transparent"};
  display: flex;
`;

export const ModalTitle = styled(Flex)<{ padding?: string; fontSize?: string }>`
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fonts.medium};
  font-size: 24px;
  padding: ${({ padding }) => (padding ? "3% 5%" : padding)};
  @media screen and (max-width: 1240px) {
    font-size: 15px;
  }
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
`;

export const ModalCloseButton: React.FC<{
  onDismiss: ModalProps["onDismiss"];
}> = ({ onDismiss }) => {
  return (
    <CloseButton
      onClick={onDismiss}
      aria-label="Close the dialog"
      className="scale-on-hover"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="22"
        height="22"
        viewBox="0 0 47.971 47.971"
        xmlSpace="preserve"
      >
        <g>
          <path
            fill={"#fff"}
            d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
          />
        </g>
      </svg>
    </CloseButton>
  );
};

export const ModalBackButton: React.FC<{
  onBack: ModalProps["onBack"];
  children: ReactNode;
}> = ({ onBack, children }) => {
  return <CloseButton onClick={onBack}>{children}</CloseButton>;
};

export const ModalContainer = styled(Box)<{ minWidth: string }>`
  overflow: hidden;
  padding: 1px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),
    0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  width: ${({ minWidth }) => minWidth};
  z-index: ${({ theme }) => theme.zIndices.modal};
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 90%;
    max-width: 96%;
  }
  animation: zoom-in 0.2s;
  animation-iteration-count: 1;
  @keyframes zoom-in {
    0% {
      transform: scale(0.5, 0.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  &.modal-overflow {
    overflow: auto;
    &::-webkit-scrollbar {
      height: 0px;
      width: 0px;
    }
  }
`;

export const ModalBorder = styled(Box)<{ padding?: string }>`
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.modal};
  padding: ${({ padding }) => (padding ? padding : "3% 5%")};
  overflow: auto;
`;

const CloseButton = styled("button")`
  outline: none;
  border: none;
  background: transparent;
`;

export const BackIcon = styled(IoMdArrowRoundBack)`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 24px;
  margin-right: 10px;
`;

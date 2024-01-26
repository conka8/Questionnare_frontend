import styled from "styled-components";
import Button from "components/Button";
import { Flex } from "components/Box";
import { Text } from "components/Text";

export const LoaderBox = styled(Flex)`
  display: block;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  height: 50%;
  & > div {
    display: inline-block;
    width: 48%;
    margin-left: 1%;
    margin-right: 1%;
  }
`;

export const ContinueButton = styled(Button)`
  width: 100%;
  height: 44px;
  border-radius: 4px;
  margin-left: auto;
  background: ${({ theme }) => theme.colors.buttonprimary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  font-size: 14px;
`;

export const WalletName = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 11px;
  white-space: nowrap;
`;
export const ChainWrapper = styled(Flex) <{
  isSelected?: boolean;
  height?: string;
  width?: string;
  isDisabled?: boolean;
}>`
  margin: 12px 2.6rem 12px 0;
  opacity: ${({ isDisabled }) => (isDisabled ? "0.5" : "1")};
  padding: 4px 8px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fonts.regular};
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: ${({ isDisabled }) => (!isDisabled && "pointer")};
  pointer-events: ${({ isDisabled }) => (isDisabled && "none")};
  filter: brightness(1);
  &.selected,
  &.checked {
    background: ${({ theme }) => theme.colors.text};
    & div:nth-child(2) {
      color: ${({ theme }) => theme.colors.modal};
    }
  }
  &.checked {
    .svg-icon {
      filter: brightness(0);
      svg,
      path {
        fill: #000;
        filter: brightness(0);
      }
    }
  }
  .svg-icon {
    svg {
      width: 40px;
      height: 40px;
    }
  }
  .address-styles {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px !important;
    font-weight: 300 !important;
  }
`;
// export const TickIcon = styled(FaCheckCircle)`
//   color: ${({ theme }) => theme.colors.success};
//   position: absolute;
//   right: 0px;
//   top: -5px;
// `

export const WalletWrapper = styled(Flex)`
  &.wallet-wrapper {
    margin: 70px auto;
    max-width: 100%;
  }

  flex-direction: row;
  margin-top: 70px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0px;
    &.wallet-wrapper {
      margin: 0px auto;
    }
  }
  .wallet-icon {
    svg,
    path {
      fill: #aaaaaa;
    }
    svg {
      margin-left: 10px;
      margin-right: 15px;
    }
  }
  .inner-wallet {
    min-height: 0;
    white-space: nowrap;
    width: auto;
    padding-right: 25px;
    height: 40px;
    margin-right: 25px;
    position: relative;
    border: none;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin-right: 18px;
    }
    &:before {
      content: "";
      position: absolute;
      right: 0;
      top: -3px;
      height: 45px;
      width: 1px;
      background: linear-gradient(133.82deg, #513cff 13.2%, #23abd4 100%);
    }
  }
  .border-none {
    border: none;
    min-height: 0;
    &:before {
      content: none;
    }
  }
  & > div {
    min-height: 200px;
    border-right: 1px solid ${({ theme }) => theme.colors.textDisabled};
    margin-right: 50px;
  }

  & > div:last-child {
    border: none;
    margin-right: 0;
    padding-right: 0;
  }
  .text-color {
    background: linear-gradient(133.82deg, #513cff 13.2%, #23abd4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 600;
    font-size: 16px;
    font-family: Poppins;
  }
  .copied-color {
    color: #54ae57;
    font-weight: 600;
    font-size: 16px;
    margin-left: 5px;
    font-family: Poppins;
  }
  .disconnet-btn {
    color: #ff3939;
    border: 1px solid #ff3939;
    padding: 5px 10px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 4px;
    margin-left: 150px;
    font-family: Poppins;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin-left: 0px;
    }
  }
  .disconnet-btn svg {
    stroke: #ff3939;
    height: 25px;
  }
  .disconnet-btn div {
    color: #ff3939;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: column;
    & > div {
      border-right: none;
      margin-right: 0px;
      padding-bottom: 0px;
      margin-top: 35px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.textDisabled};
      & > div > div {
        flex-wrap: wrap;
      }
    }
    & > div:last-child {
      border: none;
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      padding-bottom: 0px;
      margin-top: 35px;
      &:first-child {
        margin-top: 45px;
      }
    }
    .wallet-icon svg {
      margin-top: -10px;
    }
    .inner-wallet {
      width: 100%;
      padding: 0.6rem 1rem 0.6rem 0.6rem;
    }
    .address-styles {
      white-space: unset;
      word-break: break-word;
    }
    .wallet-icon {
      white-space: unset;
      height: auto;
    }
  }
`;

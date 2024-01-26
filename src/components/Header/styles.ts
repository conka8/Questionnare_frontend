import styled from "styled-components";
import { Box, Flex } from "../Box";

export const BackgroundContainer = styled(Box)`
  z-index: 999;
  margin: auto;
  width: 88%;
  max-width: 1650px;
  // .risponsive-logo-topbar {
  //   display:none;
  // }
  .onhover-header {
    cursor: pointer;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    padding-right: 30px;
    &:hover .dropdown {
      display: flex;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 32px;
      right: 10px;
      width: 8px;
      height: 1px;
      background-color: rgb(170, 170, 170);
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
      right: 5px;
    }
  }
  .navbar {
    padding-top: 25px;
    padding-bottom: 0px;
  }
  @media all and (max-width: 1640px) {
    width: 88%;
  }
  @media all and (max-width: 990px) {
    width: 90%;

    .navbar {
      position: absolute;
      left: 0;
      top: 0px;
      padding: 115px 22px 15px;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      align-content: flex-start;
      align-items: flex-start;
      height: 100vh;
      justify-content: flex-start;
      background: url(../assets/images/risponsive-nav.png) no-repeat center #000;
      background-size: cover;
      z-index: 1;
      display: none;
    }
    .navbar.show-nav {
      display: inline;
    }
    .risponsive-logo-topbar {
      display: flex;
      margin-top: 40px;
      z-index: 2;
      position: relative;
      img {
        width: 130px;
      }
    }
    .navbar-brand {
      display: none;
    }
    nav > div {
      display: flex;
      flex-direction: row;
      padding-left: 0 !important;
      margin: 10px 0;
    }
    nav > div div {
      font-size: 32px;
      font-weight: 600;
      line-height: 1.2;
      &:not(.shadow) {
        padding-left: 0 !important;
      }
    }
    nav > div div[type="button"] {
      margin-top: 30px;
    }
    nav .title {
      font-size: 32px;
      font-weight: 600;
    }
    nav div button {
      width: 160px;
      line-height: 1.2;
    }
    nav div button div {
      display: flex;
      flex-direction: row;
      font-size: 14px;
    }
  }
`;

export const Navselectedoption = styled(Flex) <{
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => (width ? width : "50px")};
  height: ${({ height }) => (height ? height : "3px")};
  left: 338px;
  top: 74px;
  background: linear-gradient(133.82deg, #5846f0 13.2%, #1e809d 100%);
  border-radius: 5px;
`;

export const BackButton = styled(Box) <{
  borderRadius?: string;
  isGradient?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
  font-family: ${({ theme }) => theme.fonts.secondary};
  height: 100%;
  width: 100%;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  &:before {
    content: "";
    border: 1px solid transparent;
    background: linear-gradient(133.82deg, #513cff 13.2%, #23abd4 100%)
      border-box;
    -webkit-mask: linear-gradient(
          rgb(255, 255, 255) 0px,
          rgb(255, 255, 255) 0px
        )
        padding-box padding-box,
      linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
    -webkit-mask-composite: xor;
    -webkit-mask-composite: exclude;
    width: 100%;
    position: absolute;
    white-space: nowrap;
    inset: 0px;
    border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "4px"};
    pointer-events: none;
  }
  .inner {
    background-image: ${({ theme, isGradient }) =>
    !isGradient && theme.colors.buttonprimary};
    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text color rather than element bg. */
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ theme, isGradient }) =>
    isGradient ? theme.colors.link : "transparent"};
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    display: flex;
    white-space: nowrap;
    align-items: center;
  }
`;
export const BackButtonBox = styled(Box) <{ width?: string; height?: string }>`
  height: ${({ height }) => (height ? height : "49px")};
  width: ${({ width }) => (width ? width : "100%")};
  background: none;
  padding: 1px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  cursor: pointer;
`;

export const AddMoreButtonBox = styled(Box) <{
  width?: string;
  height?: string;
}>`
  height: ${({ height }) => (height ? height : "49px")};
  width: ${({ width }) => (width ? width : "100%")};
  background: none;
  padding: 1px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  cursor: pointer;
`;

export const LogoImage = styled("img")`
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 80px;
  }
`;
export const HeaderItems = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const Dropdownmenu = styled(Box)`
  position: relative;
  padding-bottom: 10px;
  padding-top: 10px;
  .dropdown {
    position: absolute;
    flex-direction: column;
    display: none;
    background: rgb(46, 48, 50, 1);
    border-radius: 4px;
    left: 0;
    right: -26px;
    top: 100%;
    & > div {
      padding: 2px 15px 5px 18px;
      position: relative;
      &:hover {
        background: rgba(256, 256, 256, 0.1);
      }
    }
    .selected-item-border {
      &:before {
        content: "";
        background: linear-gradient(
          133.82deg,
          rgb(88, 70, 240) 13.2%,
          rgb(30, 128, 157) 100%
        );
        width: 8px;
        height: 8px;
        border-radius: 50%;
        transform: rotate(90deg);
        position: absolute;
        right: 15px;
        top: 12px;
        border-radius: 6px;
      }
    }
  }
 
`;

import { Box } from "components/Box";
import styled from "styled-components";

export const TopLight = styled(Box)`
  background-color: ${({ theme }) => theme.colors.backgroundDetailPage};
  background-image: url(/assets/images/BGLights.png);
  background-size: 100% 520px;
  background-repeat: no-repeat;
  background-position: top;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  ${({ theme }) => theme.mediaQueries.md} {
    background-size: 1600px 650px;
    background-position: bottom right;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    background-position: top right;
  }
`
import { Box } from "components/Box";
import styled from "styled-components";

export const MainContainer = styled(Box)`
    position: fixed;
    max-width: 100%;
    max-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const LogoImage = styled("img")`
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 145px;
  }
`;
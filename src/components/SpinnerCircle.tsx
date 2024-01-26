import styled from 'styled-components'
import React from 'react'

interface SpinnerProps {
    radius?: number
    inverted?: boolean
}

const Spinner: React.FC<SpinnerProps> = (props) => {
    const { radius, inverted } = props

    return (
        <StyledSpinner preserveAspectRatio="none" inverted={inverted} radius={radius}>
            <circle
                className="path"
                cx={radius ? radius + 2 : '22'}
                cy={radius ? radius + 2 : '22'}
                r={radius ? radius : '20'}
                fill="none"
                strokeWidth={`${Number(radius || 20) / 5}`}
            />
        </StyledSpinner>
    )
}

const StyledSpinner = styled.svg<{ inverted?: boolean; radius?: number }>`
  animation: rotate 2s linear infinite;
  margin: 0;
  width: ${({ radius }) => (radius + 2) * 2}px;
  height: ${({ radius }) => (radius + 2) * 2}px;

  & .path {
    stroke: ${({ theme, inverted }) => (inverted ? theme.colors.backgroundAlt : theme.colors.text)};
    stroke-linecap: round;
    animation: dash 1.8s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export default Spinner

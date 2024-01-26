import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 56 56" {...props}>
      <rect id="Rectangle_2055" data-name="Rectangle 2055" width="56" height="56" rx="8" fill="#ef9a9a" />
      <g id="x-circle" transform="translate(18 18)">
        <circle
          id="Ellipse_5"
          data-name="Ellipse 5"
          cx="10"
          cy="10"
          r="10"
          fill="none"
          stroke="#0c0c13"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          id="Line_12"
          data-name="Line 12"
          x1="6"
          y2="6"
          transform="translate(7 7)"
          fill="none"
          stroke="#0c0c13"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          id="Line_13"
          data-name="Line 13"
          x2="6"
          y2="6"
          transform="translate(7 7)"
          fill="none"
          stroke="#0c0c13"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </Svg>
  )
}

export default Icon

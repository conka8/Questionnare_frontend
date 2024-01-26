import React from 'react'
import Svg from '../../Svg'
import { SvgProps } from '../../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 34 34" {...props}>
      <g clipPath="url(#clip0_5744_104921)">
        <path
          d="M16.7343 4.88184L16.582 5.39023V20.1426L16.7343 20.2919L23.7059 16.2442L16.7343 4.88184Z"
          fill="#FFFFFF"
        />
        <path d="M16.7333 4.88184L9.76172 16.2442L16.7333 20.292V13.1316V4.88184Z" fill="#FFFFFF" />
        <path
          d="M16.7342 21.5885L16.6484 21.6912V26.9463L16.7342 27.1925L23.7101 17.5427L16.7342 21.5885Z"
          fill="#FFFFFF"
        />
        <path d="M16.7333 27.1926V21.5885L9.76172 17.5427L16.7333 27.1926Z" fill="#FFFFFF" />
        <path d="M16.7344 20.2921L23.7059 16.2444L16.7344 13.1318V20.2921Z" fill="#FFFFFF" />
        <path d="M9.76172 16.2444L16.7332 20.2922V13.1318L9.76172 16.2444Z" fill="#FFFFFF" />
      </g>
      <defs>
        <clipPath id="clip0_5744_104921">
          <rect width="13.9474" height="22.3158" fill="white" transform="translate(9.76172 4.88159)" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default Icon

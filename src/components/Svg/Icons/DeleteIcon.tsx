import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
        fill="url(#paint0_linear_1398_34746)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1398_34746"
          x1="5.62821"
          y1="4.49999"
          x2="22.1247"
          y2="16.8139"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0729167" stopColor="#513CFF" />
          <stop offset="1" stopColor="#23ABD4" />
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default Icon

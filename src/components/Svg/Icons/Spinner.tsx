import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 22" {...props}>
      <path
        d="M11.3203 20.815H2.32031C1.22031 20.815 0.320312 19.915 0.320312 18.815V2.815C0.320312 1.715 1.22031 0.815002 2.32031 0.815002H10.3203L16.3203 6.815V12.815H14.3203V7.815H9.32031V2.815H2.32031V18.815H11.3203V20.815ZM15.3203 20.475V18.235L18.2703 21.185L19.6803 19.775L16.7303 16.815H18.9703V14.815H13.3203V20.475H15.3203Z"
        fill="url(#paint0_linear_1398_34740)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1398_34740"
          x1="1.18904"
          y1="2.5125"
          x2="20.5794"
          y2="20.1993"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0729167" stopColor="#513CFF"></stop>
          <stop offset="1" stopColor="#23ABD4"></stop>
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default Icon

import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 144 76" {...props}>
      <g filter="url(#filter0_f_476_11862)" rotate={'360'}>
        <rect
          width="115.011"
          height="48"
          transform="matrix(-1 0 0 1 129.727 14)"
          fill="url(#paint0_linear_476_11862)"
        />
      </g>
      <path
        d="M113.947 38L114.301 38.3536L114.654 38L114.301 37.6464L113.947 38ZM107.301 45.3536L114.301 38.3536L113.594 37.6464L106.594 44.6464L107.301 45.3536ZM114.301 37.6464L107.301 30.6464L106.594 31.3536L113.594 38.3536L114.301 37.6464Z"
        fill="#ffffff"
      />
      <defs>
        <filter
          id="filter0_f_476_11862"
          x="0.714844"
          y="0"
          width="143.012"
          height="76"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_476_11862" />
        </filter>
        <linearGradient
          id="paint0_linear_476_11862"
          x1="115.011"
          y1="24"
          x2="-4.18326e-07"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F1415" stopOpacity="0.36" />
          <stop offset="0.482852" stopColor="#101415" />
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default Icon

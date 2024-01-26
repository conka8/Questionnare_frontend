import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 144 78" {...props}>
      <g filter="url(#filter0_f_5729_159609)">
        <rect
          width="115.011"
          height="48"
          transform="matrix(0.999993 -0.00380183 -0.00380183 -0.999993 14.3125 63.2185)"
          fill="url(#paint0_linear_5729_159609)"
        />
      </g>
      <path
        d="M29.9988 39.1587L29.6439 38.8065L29.2917 39.1614L29.6466 39.5136L29.9988 39.1587ZM36.6173 31.78L29.6439 38.8065L30.3537 39.511L37.3271 32.4844L36.6173 31.78ZM29.6466 39.5136L36.6732 46.487L37.3776 45.7772L30.351 38.8038L29.6466 39.5136Z"
        fill="#AAAAAA"
      />
      <defs>
        <filter
          id="filter0_f_5729_159609"
          x="0.130859"
          y="0.781616"
          width="143.191"
          height="76.4369"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_5729_159609" />
        </filter>
        <linearGradient
          id="paint0_linear_5729_159609"
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

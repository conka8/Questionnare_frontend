import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 57 56" {...props}>
      <rect x="0.5" width="56" height="56" rx="12" fill="url(#paint0_linear_225_7626)" />
      <path
        d="M29.7465 28.9906C29.7465 33.6581 25.8958 37.4481 21.1257 37.4481C16.3555 37.4481 12.5049 33.6581 12.5049 28.9906C12.5049 24.3232 16.3555 20.5332 21.1257 20.5332C25.8958 20.5332 29.7465 24.3232 29.7465 28.9906ZM39.191 28.9906C39.191 33.3781 37.2561 36.944 34.8806 36.944C32.5051 36.944 30.5702 33.3781 30.5702 28.9906C30.5702 24.6032 32.5051 21.0373 34.8806 21.0373C37.2561 21.0373 39.191 24.5846 39.191 28.9906ZM43.0608 28.9906C43.0608 32.93 42.3903 36.1225 41.5474 36.1225C40.7044 36.1225 40.0339 32.93 40.0339 28.9906C40.0339 25.0513 40.7044 21.8588 41.5474 21.8588C42.3903 21.8588 43.0608 25.0513 43.0608 28.9906Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_225_7626"
          x1="3.01284"
          y1="4.66665"
          x2="56.5"
          y2="56"
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

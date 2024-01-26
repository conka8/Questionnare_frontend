import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <g clipPath="url(#clip0_572_14175)">
        <path d="M23.9977 7L23.7793 7.72902V28.8834L23.9977 29.0975L33.9947 23.2931L23.9977 7Z" fill="white" />
        <path d="M23.997 7L14 23.2931L23.997 29.0976V18.8299V7Z" fill="white" />
        <path
          d="M23.9961 30.9568L23.873 31.1041V38.6398L23.9961 38.9928L33.9991 25.1553L23.9961 30.9568Z"
          fill="white"
        />
        <path d="M23.997 38.9927V30.9566L14 25.1552L23.997 38.9927Z" fill="white" />
        <path d="M23.9961 29.0975L33.993 23.2932L23.9961 18.83V29.0975Z" fill="white" />
        <path d="M14 23.2931L23.9969 29.0975V18.8298L14 23.2931Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_572_14175">
          <rect width="20" height="32" fill="white" transform="translate(14 7)" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default Icon

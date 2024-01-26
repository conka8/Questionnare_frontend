import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path
        d="M8 0.5C3.8525 0.5 0.5 3.8525 0.5 8C0.5 12.1475 3.8525 15.5 8 15.5C12.1475 15.5 15.5 12.1475 15.5 8C15.5 3.8525 12.1475 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14ZM10.6925 4.25L8 6.9425L5.3075 4.25L4.25 5.3075L6.9425 8L4.25 10.6925L5.3075 11.75L8 9.0575L10.6925 11.75L11.75 10.6925L9.0575 8L11.75 5.3075L10.6925 4.25Z"
        fill="url(#paint0_linear_1398_34878)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1398_34878"
          x1="1.17308"
          y1="1.74999"
          x2="15.5"
          y2="15.5"
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

import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 19.5L32 16V23L26 19.5ZM32 34.5L24 39.1667L16 34.5V26.3333L24 31L32 26.3333V34.5ZM16 16L22 19.5L16 23V16ZM25 21.1667L31 24.6667L25 28.1667V21.1667ZM23 28.1667L17 24.6667L23 21.1667V28.1667ZM31 14.3333L24 18.3333L17 14.3333L24 10.1667L31 14.3333ZM14 13.6667V35.5L24 41.1667L34 35.5V13.6667L24 8L14 13.6667Z"
        fill="white"
      />
    </Svg>
  )
}

export default Icon

import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <circle fill="#fff" cx={6} cy={50} r={6}>
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin={0.1} />
      </circle>
      <circle fill="#fff" cx={26} cy={50} r={6}>
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin={0.2} />
      </circle>
      <circle fill="#fff" cx={46} cy={50} r={6}>
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin={0.3} />
      </circle>
    </Svg>
  )
}

export default Icon

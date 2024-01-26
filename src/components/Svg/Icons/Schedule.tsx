import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 14.1 14.1" {...props}>
      <path
        id="Path_1035"
        data-name="Path 1035"
        d="M9.05,2A7.05,7.05,0,1,0,16.1,9.05,7.071,7.071,0,0,0,9.05,2Zm.7,7.05a.74.74,0,0,1-.352.634L7.569,10.742a.726.726,0,0,1-.7-1.269l1.48-.846v-3.1a.7.7,0,1,1,1.41,0Z"
        transform="translate(-2 -2)"
        fill="#0B2935"
      />
    </Svg>
  )
}

export default Icon

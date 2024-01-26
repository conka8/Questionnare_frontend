import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 19 14" {...props}>
      <g id="Group_6685" data-name="Group 6685" transform="translate(-3 -5)">
        <path
          id="Path_1100"
          data-name="Path 1100"
          d="M3,7A2,2,0,0,1,5,5H19a2,2,0,0,1,2,2V9H17a3,3,0,0,0,0,6h4v2a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2Z"
          fill="#75777a"
        />
        <path
          id="Path_1101"
          data-name="Path 1101"
          d="M15,12a2,2,0,0,1,2-2h4a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H17A2,2,0,0,1,15,12Zm3,0a1,1,0,1,1-1-1A1,1,0,0,1,18,12Z"
          fill="#75777a"
          fillRule="evenodd"
        />
      </g>
    </Svg>
  )
}

export default Icon

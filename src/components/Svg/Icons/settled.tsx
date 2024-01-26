import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 13.333 13.333" {...props}>
      <g id="Group_6673" data-name="Group 6673" transform="translate(-1.333 -1.333)">
        <path
          id="Path_1099"
          data-name="Path 1099"
          d="M15.333,8.667a6.667,6.667,0,1,0-6.667,6.667A6.669,6.669,0,0,0,15.333,8.667ZM10.667,5l2.1,2.1a.33.33,0,0,1,0,.473l-2.1,2.093V8H8V6.667h2.667Zm-4,7.333-2.1-2.1a.33.33,0,0,1,0-.473l2.1-2.093V9.333H9.333v1.333H6.667Z"
          transform="translate(-0.667 -0.667)"
        />
      </g>
    </Svg>
  )
}

export default Icon

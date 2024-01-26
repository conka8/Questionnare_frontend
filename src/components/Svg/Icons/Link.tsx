import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 17.717 17.717" {...props}>
      <path
        id="Shape"
        d="M16.24,13.811h1.476V18.24a1.481,1.481,0,0,1-1.476,1.476H1.476A1.481,1.481,0,0,1,0,18.24V3.476A1.481,1.481,0,0,1,1.476,2H5.906V3.476H1.476V18.24H16.24ZM8.858,2,12.18,5.322l-4.8,4.8L9.6,12.335l4.8-4.8,3.322,3.322V2Z"
        transform="translate(0 -2)"
        fillRule="evenodd"
        fill={props.color || "#0B2935"}
      />
    </Svg>
  )
}

export default Icon

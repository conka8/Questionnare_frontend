import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.31L12 4.19L18 6.31V11.09ZM8.82 10.59L7.4 12L10.94 15.54L16.6 9.88L15.19 8.47L10.95 12.71L8.82 10.59Z"
        fill={props.color || "#54AE57"}
      />
    </Svg>
  )
}

export default Icon

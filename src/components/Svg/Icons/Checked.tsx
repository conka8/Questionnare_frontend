import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

interface ICheckedProps extends SvgProps {
  color?: string
}
const Icon: React.FC<ICheckedProps> = (props: ICheckedProps) => {
  return (
    <Svg viewBox="0 0 14 14" {...props}>
      <path
        id="Path_1045"
        data-name="Path 1045"
        d="M55,48a7,7,0,1,0,7,7A7,7,0,0,0,55,48Zm-1.08,9.48a.464.464,0,0,1-.3.148.485.485,0,0,1-.3-.151l-1.885-1.885.6-.6,1.588,1.588,4.2-4.23.589.609Z"
        transform="translate(-48 -48)"
        fill={props.color || '#fff'}
      />
    </Svg>
  )
}

export default Icon

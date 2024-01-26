import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.3333 13.6667H4.66665C2.66665 13.6667 1.33331 12.6667 1.33331 10.3333V5.66665C1.33331 3.33332 2.66665 2.33332 4.66665 2.33332H11.3333C13.3333 2.33332 14.6666 3.33332 14.6666 5.66665V10.3333C14.6666 12.6667 13.3333 13.6667 11.3333 13.6667Z"
        stroke="#9A9EA6"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3334 6L9.24668 7.66667C8.56002 8.21333 7.43335 8.21333 6.74668 7.66667L4.66669 6"
        stroke="#9A9EA6"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon

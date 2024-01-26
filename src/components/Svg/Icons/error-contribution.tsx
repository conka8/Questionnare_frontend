import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="15" height="15" viewBox="0 0 15 15" fill={'none'} {...props}>
     <path d="M13.4535 11.5625L8.04079 2.1875C7.80023 1.77083 7.19883 1.77083 6.95826 2.1875L1.5456 11.5625C1.30504 11.9792 1.60574 12.5 2.08687 12.5H12.9122C13.3933 12.5 13.694 11.9792 13.4535 11.5625Z" stroke="#FF3939" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.46875 10H7.53125V10.0625H7.46875V10Z" stroke="#FF3939" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 5.625V8.125" stroke="#FF3939" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
}

export default Icon

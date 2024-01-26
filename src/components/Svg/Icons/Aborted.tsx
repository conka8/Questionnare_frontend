import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 13.804 13.781" {...props}>
      <path
        id="Layer_20"
        data-name="Layer 20"
        d="M15.75,15.113,9.341,2.3a.512.512,0,0,0-.878,0L2.054,15.113a.491.491,0,0,0,.439.715H15.311a.491.491,0,0,0,.439-.715ZM8.039,6.624a.5.5,0,0,1,.37-.163H9.4a.5.5,0,0,1,.37.163.5.5,0,0,1,.118.385L9.39,11.445a.491.491,0,0,1-.976,0L7.921,7.008a.5.5,0,0,1,.118-.385ZM8.9,14.349a.986.986,0,1,1,.986-.986A.986.986,0,0,1,8.9,14.349Z"
        transform="translate(-2 -2.047)"
        fill="#e84142"
      />
    </Svg>
  )
}

export default Icon

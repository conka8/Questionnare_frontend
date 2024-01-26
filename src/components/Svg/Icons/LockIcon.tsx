import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 17" {...props}>
      <path
        d="M2.67969 8.6949C2.67969 7.58796 3.50407 6.65431 4.60249 6.51723L7.72808 6.12718C7.90855 6.10465 8.09113 6.10465 8.2716 6.12718L11.3972 6.51723C12.4956 6.65431 13.32 7.58796 13.32 8.6949V12.9024C13.32 13.9587 12.5675 14.8651 11.5292 15.0595L8.40363 15.6446C8.13675 15.6945 7.86293 15.6945 7.59605 15.6446L4.47046 15.0595C3.43219 14.8651 2.67969 13.9587 2.67969 12.9024V8.6949Z"
        stroke="#1EA0FF"
        strokeWidth="1.17566"
        fill='none'
      />
      <ellipse
        cx="7.99868"
        cy="10.1045"
        rx="0.738911"
        ry="0.802243"
        fill="#1EA0FF"
        stroke="#1EA0FF"
        strokeWidth="1.17566"
      />
      <path
        d="M5.33984 6.3339V3.47435C5.33984 2.26232 6.32238 1.27979 7.53441 1.27979H8.46543C9.67746 1.27979 10.66 2.26232 10.66 3.47435V3.80685"
        stroke="#1EA0FF"
        strokeWidth="1.17566"
        strokeLinecap="round"
        fill='none'

      />
      <path d="M8 10.9067V12.5112" stroke="#1EA0FF" strokeWidth="1.17566" strokeLinecap="round" />
    </Svg>
  )
}

export default Icon

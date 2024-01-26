import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.5 8.75C10.71 8.75 12.5 6.96 12.5 4.75C12.5 2.54 10.71 0.75 8.5 0.75C6.29 0.75 4.5 2.54 4.5 4.75C4.5 6.96 6.29 8.75 8.5 8.75ZM8.5 2.75C9.6 2.75 10.5 3.65 10.5 4.75C10.5 5.85 9.6 6.75 8.5 6.75C7.4 6.75 6.5 5.85 6.5 4.75C6.5 3.65 7.4 2.75 8.5 2.75ZM2.5 14.75C2.7 14.12 5.07 13.07 7.46 12.81L9.5 10.81C9.11 10.77 8.82 10.75 8.5 10.75C5.83 10.75 0.5 12.09 0.5 14.75V16.75H9.5L7.5 14.75H2.5ZM18.1 9.25L12.97 14.42L10.9 12.34L9.5 13.75L12.97 17.25L19.5 10.66L18.1 9.25Z"
        fill="white"
      />
    </Svg>
  )
}

export default Icon

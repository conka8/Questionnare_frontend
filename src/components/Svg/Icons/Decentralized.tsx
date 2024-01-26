import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 84 78" {...props}>
      <path d="M7.42578 21.5361L16.0191 30.9888L11.4558 44.2015L3.40884 33.167L7.42578 21.5361Z" fill="#D8E0FB" />
      <path d="M22.877 50.25L31.4703 59.7027L26.907 72.9154L18.86 61.8809L22.877 50.25Z" fill="#D8E0FB" />
      <path d="M77.7172 46.0152L65.1084 48.1894L60.5452 61.4021L73.7003 57.6461L77.7172 46.0152Z" fill="#D8E0FB" />
      <path d="M47.8002 58.7955L35.1914 60.9697L30.6282 74.1824L43.7833 70.4263L47.8002 58.7955Z" fill="#D8E0FB" />
      <path
        d="M10.2452 18.8331L23.5323 16.4176L27.4974 20.7315L32.9245 20.4664L37.4497 7.36394L46.2905 16.7838L41.4718 30.7362L35.4053 24.2776L31.6457 24.169L32.2973 26.4033L19.4435 28.2566L10.2452 18.8331Z"
        fill="#D8E0FB"
      />
      <path d="M40.8738 5.35167L49.4711 14.4511L61.0174 12.2667L53.1576 3.77682L40.8738 5.35167Z" fill="#D8E0FB" />
      <path
        d="M49.9421 18.2734L45.3061 31.6966L53.7278 29.9761L57.1665 33.0496L55.3466 34.1982L64.541 43.975L76.8643 41.5851L68.6293 32.1376L62.8407 33.1031L58.6643 28.7167L62.9353 16.3502L49.9421 18.2734Z"
        fill="url(#paint0_linear_225_7527)"
      />
      <path
        d="M19.7524 32.5151L15.5908 44.5646L24.5782 42.9206L28.1612 46.2805L24.9179 47.772L34.5805 56.8811L47.5018 55.5248L46.0795 52.4316L50.8701 51.9491L56.7295 58.6898L60.8911 46.6403L52.0502 37.2204L48.1805 48.425L43.6661 49.4761L38.6392 45.1455L33.8118 46.0932L28.785 41.7626L32.6561 30.5541L19.7524 32.5151Z"
        fill="url(#paint1_linear_225_7527)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_225_7527"
          x1="52.6195"
          y1="15.065"
          x2="65.5866"
          y2="50.8497"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0729167" stopColor="#513CFF" />
          <stop offset="1" stopColor="#23ABD4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_225_7527"
          x1="22.9112"
          y1="29.3476"
          x2="30.7017"
          y2="68.6723"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0729167" stopColor="#513CFF" />
          <stop offset="1" stopColor="#23ABD4" />
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default Icon

import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 56 56" {...props}>
      <rect id="Rectangle_2055" data-name="Rectangle 2055" width="56" height="56" rx="8" fill="white" />
      <g id="info" transform="translate(40 40) rotate(180)">
        <path fill="white" d="M0 0h24v24H0z"></path>
        <path
          fill="#0C0C13"
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
        ></path>
      </g>
    </Svg>
  )
}

export default Icon

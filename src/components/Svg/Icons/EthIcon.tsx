import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <g id="ETH" transform="translate(-1232.24 -371)">
        <circle
          id="Ellipse_16"
          data-name="Ellipse 16"
          cx="9.8"
          cy="9.8"
          r="9.8"
          transform="translate(1232.24 371)"
          fill="#627eea"
        />
        <path
          id="Path_7"
          data-name="Path 7"
          d="M15.739,20.183l-3.051-1.451,3.051,5.331,3.051-5.331Z"
          transform="translate(1226.369 362.332)"
          fill="#fff"
        />
        <path
          id="Path_8"
          data-name="Path 8"
          d="M18.742,12.652,16.023,7.931,13.3,12.658l2.721-1.291Z"
          transform="translate(1226.085 367.33)"
          fill="#fff"
        />
        <path
          id="Path_9"
          data-name="Path 9"
          d="M13.741,16.854l2.486,1.177,2.49-1.179-2.49-1.177Z"
          transform="translate(1225.882 363.747)"
          fill="#fff"
        />
      </g>
    </Svg>
  )
}

export default Icon

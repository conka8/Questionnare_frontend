import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 21 32" {...props}>
      <path d="M10.3316 0L10.1133 0.729017V21.8834L10.3316 22.0975L20.3287 16.2931L10.3316 0Z" fill="white" />
      <path d="M10.331 0L0.333984 16.2931L10.331 22.0976V11.8299V0Z" fill="white" />
      <path d="M10.3301 23.9567L10.207 24.104V31.6397L10.3301 31.9927L20.3331 18.1553L10.3301 23.9567Z" fill="white" />
      <path d="M10.331 31.9928V23.9567L0.333984 18.1553L10.331 31.9928Z" fill="white" />
      <path d="M10.3301 22.0976L20.327 16.2933L10.3301 11.8301V22.0976Z" fill="white" />
      <path d="M0.333984 16.2931L10.3309 22.0975V11.8298L0.333984 16.2931Z" fill="white" />
    </Svg>
  )
}

export default Icon

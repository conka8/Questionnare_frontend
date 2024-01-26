import styled from 'styled-components'
import { space, typography, color } from 'styled-system'
import { TextProps } from './types'

const Text = styled.div<TextProps>`
  line-height: 1.5;
  text-transform: ${({ textTransform }) => textTransform};
  ${space}
  ${typography}
  ${color}
`

Text.defaultProps = {
  color: 'text',
  small: false,
}

export default Text

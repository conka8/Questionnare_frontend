import 'styled-components'
import { ApplicationTheme } from './index'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ApplicationTheme {}
}

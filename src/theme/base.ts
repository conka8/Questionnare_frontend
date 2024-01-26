import { MediaQueries, Breakpoints, Spacing, Fonts } from './types'

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
}

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`)

const mediaQueries: MediaQueries = {
  xs: `@media screen and (max-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (max-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (max-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (max-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (max-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (max-width: ${breakpointMap.lg}px)`,
}

export const shadows = {
  level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  active: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
  success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
  warning: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
  focus: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
  inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
}

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64]

const radii = {
  small: '4px',
  default: '16px',
  card: '32px',
  circle: '50%',
}

const zIndices = {
  dropdown: 10,
  modal: 100,
}

const fonts: Fonts = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 18,
  xl: 60,
  fontSize11: 11,
  fontSize12: 12,
  fontSize13: 13,
  fontSize14: 14,
  fontSize15: 15,
  fontSize16: 16,
  fontSize18: 18,
  fontSize20: 20,
  fontSize21: 21,
  fontSize22: 22,
  fontSize24: 24,
  fontSize26: 26,
  primary: 'Poppins',
  secondary: 'Poppins',
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
}
export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
  fonts,
}

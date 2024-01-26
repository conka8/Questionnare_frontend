import React from 'react'
import { ImagePropsInterface } from './type'

const Image: React.FC<ImagePropsInterface> = (props) => {
  const { width, height, src, classes } = props
  return <img src={src} width={width || '100%'} height={height || '100%'} className={classes} alt="" />
}
export default Image

import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'


export const FadeComponent = ({children,distance='30px',...rest}) => {
  return (
    <Fade distance={distance} {...rest}>
        {children}
    </Fade>
  )
}


export const ZoomComponent = ({children,...rest}) => {
  return (
    <Zoom {...rest}>
        {children}
    </Zoom>
  )
}
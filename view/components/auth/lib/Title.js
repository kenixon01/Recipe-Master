import React from 'react'
import { Text } from 'react-native'
import style from './styles/titleStyle'

export default Title = ({fontFamily, color, fontSize, textAlign, children, backgroundColor}) => {
  return (
    <Text style={{
      ...style.title, 
      fontFamily: fontFamily, 
      color: color,
      fontSize: fontSize || 60,
      textAlign: textAlign,
      backgroundColor: backgroundColor
      
    }}>{children}</Text>
  )
}

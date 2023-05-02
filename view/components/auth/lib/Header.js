import React from 'react'
import { Text } from 'react-native'
import style from './styles/headerStyle'

export default Header = ({textAlign, children, fontSize, color}) => {
  return (
    <Text style = {{
        ...style.header, 
        color: color || 'black',
        fontSize: fontSize || 25,
        textAlign: textAlign || 'center'
    }}>{children}</Text>
  )
}

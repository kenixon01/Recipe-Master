import React from 'react'
import { Text } from 'react-native'
import style from './styles/headerStyle'

export default Header = ({textAlign, children}) => {
  return (
    <Text style = {{
        ...style.header, 
        textAlign: textAlign || 'center'
    }}>{children}</Text>
  )
}

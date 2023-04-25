import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import style from './styles/appButtonStyle'

export default AppButton = ({children, onPress}) => {
  return (
    <TouchableOpacity style={style.button} onPress = {onPress}>
      <Text style={style.text}>{children}</Text> 
    </TouchableOpacity>
  )
}

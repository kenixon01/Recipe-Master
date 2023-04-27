import React from 'react'
import { View, TextInput } from 'react-native'
import style from './styles/inputBoxStyle'

export default InputBox = ({keyboardType, placeholder, secureTextEntry, onChangeText,value}) => {
  return (
    <View style = {style.inputView}>
      <TextInput 
          style = {style.inputText}
          autoCapitalize={'none'}
          keyboardType={keyboardType}
          placeholder = {placeholder}
          onChangeText = {onChangeText}
          value={value}
          secureTextEntry = {secureTextEntry}
      />
    </View> 
  )
}

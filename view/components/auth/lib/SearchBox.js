import React from 'react'
import { View, TextInput } from 'react-native'
import style from './styles/searchBoxStyle'

export default SearchBox = ({keyboardType, placeholder,value, onSubmitEditing, defaultValue, clearButtonMode, secureTextEntry, onChangeText}) => {
  return (
    <View style = {style.inputView}>
      <TextInput 
          style = {style.inputText}
          autoCapitalize={'none'}
          keyboardType={keyboardType}
          placeholder = {placeholder}
          onChangeText = {onChangeText}
          secureTextEntry = {secureTextEntry}
          onSubmitEditing={onSubmitEditing}
          defaultValue={defaultValue}
          value={value}
          clearButtonMode={clearButtonMode}
      />
    </View> 
  )
}

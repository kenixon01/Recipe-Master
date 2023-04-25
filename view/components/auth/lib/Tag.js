import React from 'react'
import { View, Text } from 'react-native'
import style from './styles/tagStyle'

export default Tag = ({backgroundColor, key, onPress, children}) => {
  return (
    <View 
        onPress={onPress} 
        key={key} 
        style = {{...style.tag, backgroundColor: backgroundColor}}>
        <Text style={style.text}>{children}</Text>
    </View> 
  )
}

import React from 'react'
import { View, Text } from 'react-native'
import style from './styles/tagStyle'

export default Tag = ({backgroundColor, index, onPress, children}) => {
  return (
    <View style = {{...style.tag, backgroundColor: backgroundColor}}>
         <Text key={index} style={style.text} onPress={onPress}>{children}</Text>
    </View> 
  )
}

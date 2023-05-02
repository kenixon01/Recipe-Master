import React from 'react'
import { Text } from 'react-native'
import style from './styles/captionStyle'

export default Caption = ({children}) => {
  return (<Text style = {style.SmallerTxt}>{children}</Text>)
}

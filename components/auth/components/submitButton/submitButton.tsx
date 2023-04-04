import React from 'react'
import { Text } from 'react-native'
import { style } from './style'

interface SubmitButtonProps {
    backgroundColor: string,
    width: number,
    color: string,
    onPress: Object,
    text: string
}

const SubmitButton = (props: SubmitButtonProps) => {
   const { backgroundColor, width, color, onPress, text } = props

   return (
    <TouchableOpacity 
        style={{
            ...style.loginBtn, 
            backgroundColor: backgroundColor, 
            borderColor: color,
            width: width
        }} 
        onPress = { () => onPress }>
      <Text style={ style.loginText }>{ text }</Text> 
    </TouchableOpacity>
   )
};

export default SubmitButton;
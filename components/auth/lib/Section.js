import React from 'react'
import { View } from 'react-native'
import style from './styles/sectionStyle'

export default Section = ({backgroundColor, children}) => {
    return (
        <View style = {{
            ...style.box, 
            backgroundColor: backgroundColor,
        }}>{children}</View>
  )
}

import React from 'react'
import { Text, View, Button } from 'react-native'
import style from './style'

export default function Landing({navigation}) {
  return (
    <View style = {style.container}>
      <Text style = {style.title}> Recipe Master</Text>
        <Button 
            title='Register'
            onPress={() => navigation.navigate("Register")}/>
        <Button 
            title='Login'
            onPress={() => navigation.navigate("Login")}/>    
    </View>
   
  )
}

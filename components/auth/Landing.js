import React from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'

export default function Landing({navigation}) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}> Recipe Master</Text>
        <Button 
            title='Register'
            onPress={() => navigation.navigate("Register")}/>
        <Button 
            title='Login'
            onPress={() => navigation.navigate("Login")}/>    
    </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    alignItems: 'center',
    justifyContent: 'center',
    },
  title:{
    fontWeight: "bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

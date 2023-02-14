import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Keyboard,Button } from 'react-native';


 export default function MainScreen ({navigation}) {
  return(
    <View style = {styles.container} >
      <Text style = {styles.title}>Welcome, User</Text>

     
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Search for a Recipe"
              placeholderTextColor="#003f5c"
              />
        
      </View>
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
    color:'black',
    marginBottom: 40,
    },
  inputView:{
    width:"80%",
    backgroundColor:"#3AB4BA",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
    },
  rentangle: {
    width: 100 *2,
    height: 100,
    backgroundColor: '#7fff00'
  },
      
  

});

//export default MainScreen;
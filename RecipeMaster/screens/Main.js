import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Keyboard,Button } from 'react-native';


 export default function MainScreen ({navigation}) {
  return(
    <View style = {styles.container} >
      <Text style = {styles.title}>Welcome, User</Text>

      <View style = {styles.greenBox}>
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Search for a Recipe"
              placeholderTextColor="#003f5c"
              />
        </View>
      </View>
      <View style = {styles.whiteBox}>
        <Text style = {styles.header}>Popular Searches</Text>
        <Text style = {styles.SmallerTxt}>Try one of these!</Text>
      </View>

      <View style ={styles.greenBox}>
        <Text style = {styles.header}>Recommend Recipes</Text>
      </View>
    </View>
    )
  
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white',
    },
  title:{
    fontWeight: "bold",
    fontSize:50,
    color:'black',
    marginBottom: 40,
    textAlign:'center'
    },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    padding:20,
    justifyContent:"center",
    alignItems:'center',
    },
  inputText:{
      height:50,
      color:"black"
    },
  header:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  SmallerTxt:{
    fontSize: 15,
    fontStyle:'italic',
    textAlign:'center',
    color:'#228b22',
  },
  greenBox:{
    backgroundColor:'#D6E4CD',
    height: 150,
    justifyContent:'center',
    alignItems:'center',
  },
  whiteBox:{
    backgroundColor:'white',
    height: 150,
    justifyContent:'center',
    alignItems:'center',
  },
      
  

});

//export default MainScreen;
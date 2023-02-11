import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function SettingsScreen ({navigation}){
    const [shouldshow, setshouldShow] = useState(true);

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Settings</Text>

       
        
        {/** First name */}
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "First Name"
              placeholderTextColor="#003f5c"
              />
        </View>
        {/** Last name */}
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Last Name"
              placeholderTextColor="#003f5c"
              />
        </View>
        {/** Email */}
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Email Address"
              placeholderTextColor="#003f5c"
              />
        </View>
        {/** User name */}
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Username"
              placeholderTextColor="#003f5c"
              />
        </View>
        {/** Password */}
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Password"
              placeholderTextColor="#003f5c"
              />
        </View>
        <TouchableOpacity style={styles.SubmitBtn}>
            <Text style={styles.SubmitText}>Submit</Text> 
        </TouchableOpacity> 
        {shouldshow ? (
            <Text>hello</Text>
        ) :null } 
        
        <TouchableOpacity onPress={() => setshouldShow(!shouldshow)}> 
        <Text> Update Personal Information</Text>
         </TouchableOpacity>

        </View>
    );
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
    inputText:{
        height:50,
        color:"white"
        },
    SubmitBtn:{
        width:"80%",
        backgroundColor:"#7fff00",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
        },
    SubmitText: {
        fontWeight: 'bold',
        },
});
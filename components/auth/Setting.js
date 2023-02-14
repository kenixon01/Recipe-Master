import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Alert } from 'react-native';



export default function SettingsScreen ({navigation}){
    const [shouldshow, setshouldShow] = useState(false);
    //const [darkMode, setDarkMode] = useState(false);
    const [isShowing, setIsShowing] = useState(false);

    const [isOn , setIsOn] = React.useState(false);
    const onToggleSwitch = () => setIsOn(!isOn);

    

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Settings</Text>
        
        <TouchableOpacity onPress={() => setshouldShow(!shouldshow)}> 
        <Text style = {styles.headerText}>{'                 '}
        Update Personal Information</Text>
         </TouchableOpacity>

         {shouldshow ? (
            <View >

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
        
        </View>
        ) :null } 

<TouchableOpacity onPress={() => setIsShowing(!isShowing)}> 
        <Text style = {styles.headerText}>{'                 '}
            Accessibility</Text>
         </TouchableOpacity>


         {isShowing ? (
            <View >
            <View style = {{flexDirection: 'row', justifyContent:'space-evenly'}}>
            <Text style = {styles.darkModeText}>Dark Mode  </Text>
            <Switch
                    value = {isOn}
                    onValueChange = {onToggleSwitch}
                    trackColor ={{false:'black', true:'white'}}
                    thumbColor = {isOn ? "black": "white"}
            />
            </View>
        </View>
        ) :null } 
        <View style = {{bottom : 0, position : 'absolute' }}>
            <TouchableOpacity
                onPress={() => Alert.alert(
                    'Delete Account ?!?',
                    'Are you sure you want to delete your account?',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                      {text: 'Confirm ',},
                    ],
                    { cancelable: false }
                  )}>
                <Text style = {styles.deleteText}>Delete Account ?</Text>
            </TouchableOpacity>
        </View>
        
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4FD3DA',
        
        },
    title:{
        fontWeight: "bold",
        fontSize:50,
        color:'black',
        marginBottom: 40,
        textAlign:'center',
        },
    inputView:{
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
    darkModeText: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        alignSelf:'center'
    },
    headerText:{
        fontSize: 20,

    },
    deleteText: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        alignSelf:'flex-start',
        alignItems:'flex-end',
        

    }
});
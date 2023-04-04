import React, {useState} from 'react'
import { View, Button, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { useMutation, gql } from '@apollo/client';

// const SIGN_UP_MUTATION = gql`
// mutation signUp($email: String!, $password: String!, $name: String!) {
//   signUp(input: {email: $email, password: $password, name: $name}){
//     token
//     user {
//       id
//       name
//       email
//     }
//   }
// }
// `;
  
export function Register ({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [userName , setUserName] = useState('');
  
 // const [signUp, { data, error, loading }] = useMutation(SIGN_UP_MUTATION);

  // if (error) {
  //   Alert.alert('Error signing up. Try again')
  //   console.log(error)
  // }

  // if (data) {
  //   // save token
  //   AsyncStorage
  //     .setItem('token', data.signUp.token)
  //     .then(() => {
  //       // redirect home
  //       navigation.navigate('Main')
  //     })
  // }

  // const onSubmit = () => {
  //   signUp({variables: { name, email, password, userName }})
  // }

   
    return (
      <View style = {style.container}>
         
        <ImageBackground 
         style = {style.image}>
    
      <Text style={style.title}> Recipe Generator</Text>
      <View style = {style.inputView}>
         <TextInput
            style = {style.inputText}
            placeholder = "First Name"
            placeholderTextColor="#003f5c"
            value= {name}
            onChangeText = {setName}
            />
          </View>

      <View style = {style.inputView}>
        <TextInput 
            style = {style.inputText}
            placeholder = "Email"
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText = {setEmail}
            />
            </View>
            <View style = {style.inputView}>
        <TextInput 
            style = {style.inputText}
            placeholder = "User Name"
            placeholderTextColor="#003f5c"
            value={userName}
            onChangeText = {setUserName}
            />
            </View>  
        <View style = {style.inputView}>
         <TextInput
            style = {style.inputText}
            placeholder = "Password"
            placeholderTextColor="#003f5c"
            value={password}
            onChangeText = {setPassword}
            />
          </View> 
          <View>
            <Text style = {style.text}>Must be at least 8 characters and include at least 1 special
              character
            </Text>
          </View>
        <TouchableOpacity style={style.SignupBtn} onPress = {() => navigation.navigate('Main')}>
            <Text>Sign Up</Text> 
        </TouchableOpacity>
        <View style = {{flexDirection: 'row'}}>
          <Text>Already have an account ?</Text>
          <Text onPress={() => navigation.navigate("Login")} style = {style.LoginText}> Login </Text>
          
        </View>
        </ImageBackground>
      </View>
    )
  }

const style = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
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
    backgroundColor:"#EFEFEF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
    },
  inputText:{
    height:50,
    color:"black"
    },
  forgotAndSignUpText:{
    color:"white",
    fontSize:11
    },
  SignupBtn:{
    width:"80%",
    backgroundColor:"#7fff00",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
    },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '10'
    },
  LoginText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline'
    },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems:'center',
    
  },
  overlay: {
    backgroundColor:'transparent',
    opacity: 0.6
},
});
export default Register
import React, {useState, useEffect } from 'react'
import { View, Button, Text, TextInput, StyleSheet,
    TouchableOpacity,Alert, } from 'react-native'
import { gql, useMutation } from '@apollo/client'
//import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SIGN_IN_MUTATION = gql`
mutation SignIn($email: String!, $password: String!) {
  signIn(input: { email: $email, password: $password}) {
    token
    user {
      name
      email
    }
  }
}
`;

export function Login ({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, {data, error, loading}] = useMutation(SIGN_IN_MUTATION)

  useEffect(() => {
    if (error) {
      Alert.alert('Invalid credentials, try again');
      
    }
  },[error])

  if (data) {
    // save token
    AsyncStorage
      .setItem('token', data.signIn.token)
      .then(() => {
        // redirect home
        navigation.navigate('Main')
      })
  }
  
  const onSubmit = () => {
    signIn({variables: { email, password }})
      .then(response => {
        console.log(`Response: ${response}`)
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })
  }
    return ( 
      <View style = {style.container}> 
      <Text style={style.title}> Login Screen</Text>
      <View style = {style.inputView}>
        <TextInput 
            style = {style.inputText}
            placeholder = "Username or Email"
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText = {setEmail}
            />
      </View> 
      <View style = {style.inputView}>
         <TextInput
            style = {StyleSheet.TextInput}
            placeholder = "Password"
            placeholderTextColor="#003f5c"
            value={password}
            onChangeText = {setPassword}
            />
      </View> 

      <View>
          <Button
            title='Forgot Password'
            onPress={() => navigation.navigate("ForgotPassword")}
            titleStyle = {{color: '#039BE5', }}
            type = 'clear'
          />
      </View>

        <TouchableOpacity style={style.loginBtn} 
          onPress = {() => onSubmit()} >
            <Text style={style.loginText}>LOGIN</Text> 
        </TouchableOpacity>

        <View style = {{flexDirection: 'row'}}>
          <Text >No Account </Text>
          <Text onPress={() => navigation.navigate("Register")} style = {style.SignUpText}> Sign up </Text>
          
        </View>

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
        color:"black",
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
        loginBtn:{
        width:"80%",
        backgroundColor:"#7fff00",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
        },
        SignUpText: {
          fontWeight: 'bold',
          fontStyle: 'italic',
          textDecorationLine: 'underline'
        }
});



export default Login

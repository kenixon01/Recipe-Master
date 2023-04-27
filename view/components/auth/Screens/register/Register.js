import React, { useEffect,useState } from 'react'
import { View, Text, ImageBackground, Alert } from 'react-native'
import { InputBox, AppButton, Title } from '../../lib';
import style from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, gql } from '@apollo/client';
  
const SIGN_UP_MUTATION = gql`
mutation signUp($email: String!, $password: String!, $name: String!) {
  signUp(input: {email: $email, password: $password, name: $name}){
    token
    user {
      email
    }
  }
}
`;
  
export function Register ({navigation}) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const [signUp, { data, error, loading }] = useMutation(SIGN_UP_MUTATION);

  useEffect(() => {
    if (error) {
      Alert.alert('No fields can be left blank');
    }
  },[error])

  if (data){
    AsyncStorage
    .setItem('token', data.signUp.token)
    .then(() => {
      navigation.navigate('Main')
    })
  }

  const onSubmit = () => {
    signUp({variables: {name, email, password, userName}})
      .then(response => {
        console.log(`Response: ${response}`)
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })
  }  

    return (
      <ImageBackground 
          style = {style.image}
          source={require('../../../../assets/20221220_194217_32.jpg')}>
      <View style = {style.container}>
          <Title fontFamily="PTSansNarrow" color='#4F5200'>Sign Up</Title>
          <InputBox
            placeholder = "First Name"
            value= {name}
            onChangeText = {setName}
          />
          <InputBox
            keyboardType={'email-address'}
            placeholder = "Email"
            value={email}
            onChangeText = {setEmail}
          />
          <InputBox
            placeholder = "Password"
            value={password}
            onChangeText = {setPassword}
            />
          <View>
            <Text style = {style.text}>Must be at least 8 characters and include at least 1 special character</Text>
          </View>
          <AppButton onPress = {() => onSubmit()}>Sign Up</AppButton>
          <View style = {{flexDirection: 'row'}}>
            <Text style={style.forgotAndSignUpText}>Already have an account?</Text>
            <Text style = {style.LoginText} onPress={() => navigation.navigate("Login")}> Login </Text> 
          </View> 
      </View>
    </ImageBackground>
)}

export default Register
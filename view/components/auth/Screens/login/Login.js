import React, { useEffect,useState } from 'react'
import { View, Button, Text, ImageBackground, ActivityIndicator, Alert} from 'react-native'
import style from './style'
import * as Font from 'expo-font';
import {InputBox, AppButton, Title} from '../../lib/index'
import { gql, useMutation } from '@apollo/client'
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

  validateFields = () => {
    const { email, password} = this.state;
    if ( !email.trim() || !password.trim()){
      alert('No fields can remain blank')
      return;
    }
  }

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'PTSansNarrow': require('../../../../assets/fonts/PTSansNarrow-Bold.ttf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

    return ( 
      <ImageBackground style = {style.container} resizeMode={'cover'} source={require('../../../../assets/20221210_101358_HDR.jpg' )}>
        <Title fontFamily="PTSansNarrow" color='white'>Recipe Master</Title>
          <View style = {style.containerBottom}> 
          <View style= {style.loginContainer}>
            <InputBox
              keyboardType='email-address'
              placeholder = "Email"
              value={email}
              onChangeText = {setEmail}
            />
            <InputBox
              placeholder = "Password"
              secureTextEntry = {true}
              value={password}
              onChangeText = {setPassword}
            />
            <View>
              <Button
                title='Forgot Password'
                onPress={() => navigation.navigate("ForgotPassword")}
                type = 'clear'
                color={'#4F5200'}
              />
            </View>
          </View>
          <AppButton
            onPress = {() =>navigation.navigate("Main")}
          >Login</AppButton>
          <View style = {{flexDirection: 'row'}}>
            <Text style = {style.forgotAndSignUpText}>No Account?</Text>
            <Text style = {style.SignUpText} onPress={() => navigation.navigate("Register")}> Sign up </Text>
          </View>
        </View>
      </ImageBackground>
    )
  }




export default Login

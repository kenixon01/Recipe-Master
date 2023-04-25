import React, { Component } from 'react'
import { View, Button, Text, ImageBackground, ActivityIndicator} from 'react-native'
import style from './style'
import * as Font from 'expo-font';
import {InputBox, AppButton, Title} from '../../lib/index'

export class Login extends Component {

  constructor(props) {
      super(props);

      this.state = {
          email: '',
          password: '',
          fontsLoaded: false
      }
      
  }

  async loadFonts() {
    await Font.loadAsync({
      PTSansNarrow: require('../../../../assets/fonts/PTSansNarrow-Bold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  validateFields = () => {
    const { email, password} = this.state;
    if ( !email.trim() || !password.trim()){
      alert('No fields can remain blank')
      return;
    }
  }

  render() {
    while(!this.state.fontsLoaded) {
      this.loadFonts()
      return (
        <View style={style.activityIndicator}>
          <ActivityIndicator size={"large"}/>
        </View>
      )
    }
    return ( 
      <ImageBackground style = {style.container} resizeMode={'cover'} source={require('../../../../assets/20221210_101358_HDR.jpg' )}>
        <Title fontFamily="PTSansNarrow" color='white'>Recipe Master</Title>
          <View style = {style.containerBottom}> 
          <View style= {style.loginContainer}>
            <InputBox
              keyboardType='email-address'
              placeholder = "Username or Email"
              onChangeText = {(email) => this.setState(email)}
            />
            <InputBox
              secureTextEntry = {true}
              placeholder = "Password"
              onChangeText = {(password) => this.setState(password)}
            />
            <View>
              <Button
                title='Forgot Password'
                onPress={() => this.props.navigation.navigate("ForgotPassword")}
                type = 'clear'
                color={'#4F5200'}
              />
            </View>
          </View>
          <AppButton
            onPress = {() => this.props.navigation.navigate("Main")}
          >Login</AppButton>
          <View style = {{flexDirection: 'row'}}>
            <Text style = {style.forgotAndSignUpText}>No Account?</Text>
            <Text style = {style.SignUpText} onPress={() => this.props.navigation.navigate("Register")}> Sign up </Text>
          </View>
        </View>
      </ImageBackground>
    )
  }
}



export default Login

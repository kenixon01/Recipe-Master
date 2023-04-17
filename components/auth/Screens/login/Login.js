import React, { Component } from 'react'
import { View, Button, Text, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator} from 'react-native'
import style from './style'
import * as Font from 'expo-font';

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
        <Text style={{...style.title, fontFamily: 'PTSansNarrow' }}>Recipe Master</Text>
          <View style = {style.containerBottom}> 
          <View style= {style.loginContainer}>
            <View style = {style.inputView}>
              <TextInput 
                  style = {style.inputText}
                  autoCapitalize={'none'}
                  keyboardType={'email-address'}
                  placeholder = "Username or Email"
                  onChangeText = {(email) => this.setState({email})}
                  />
            </View> 
            <View style = {style.inputView}>
              <TextInput
                  style = {style.inputText}
                  secureTextEntry = {true}
                  autoCapitalize={'none'}
                  placeholder = "Password"
                  onChangeText = {(password) => this.setState({password})}
                  />
            </View> 
            <View>
                <Button
                  title='Forgot Password'
                  onPress={() => this.props.navigation.navigate("ForgotPassword")}
                  // titleStyle = {{color: '#039BE5', }}
                  type = 'clear'
                  color={'#4F5200'}
                />
            </View>
          </View>
          <TouchableOpacity style={style.loginBtn} 
            onPress = {() => this.props.navigation.navigate("Main")}>
              <Text style={style.loginText}>Login</Text> 
          </TouchableOpacity>

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

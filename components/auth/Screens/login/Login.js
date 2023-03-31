import React, { Component } from 'react'
import { View, Button, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
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
        CairoPlay: require('../../../../assets/fonts/CairoPlay-ExtraBold.ttf'),
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
    if(!this.state.fontsLoaded) {this.loadFonts()}
    else {
    return ( 
      <View style = {style.container}>
        <ImageBackground source={require('../../../../assets/20221230_143041_212.jpg')} style={style.image} resizeMode="cover">
        <View style = {style.containerBottom}> 
          <Text style={{...style.title, fontFamily: 'CairoPlay' }}>Recipe Master</Text>
          <View style= {style.loginContainer}>
            <View style = {style.inputView}>
              <TextInput 
                  style = {style.inputText}
                  autoCapitalize={'none'}
                  keyboardType={'email-address'}
                  placeholder = "Username or Email"
                  placeholderTextColor="#003f5c"
                  onChangeText = {(email) => this.setState({email})}
                  />
            </View> 
            <View style = {style.inputView}>
              <TextInput
                  style = {style.inputText}
                  secureTextEntry = {true}
                  autoCapitalize={'none'}
                  placeholder = "Password"
                  placeholderTextColor="#003f5c"
                  onChangeText = {(password) => this.setState({password})}
                  />
            </View> 
            <View>
                <Button
                  title='Forgot Password'
                  onPress={() => this.props.navigation.navigate("ForgotPassword")}
                  // titleStyle = {{color: '#039BE5', }}
                  type = 'clear'
                />
            </View>
          </View>
          <TouchableOpacity style={style.loginBtn} 
            onPress = {() => this.props.navigation.navigate("Main")}>
              <Text style={style.loginText}>Login</Text> 
          </TouchableOpacity>

          <View style = {{flexDirection: 'row'}}>
            <Text style = {{color:'white'}}>No Account </Text>
            <Text onPress={() => this.props.navigation.navigate("Register")} style = {style.SignUpText}> Sign up </Text>
          </View>
        </View>
        </ImageBackground>
        
      </View>
    )}
  }
}



export default Login

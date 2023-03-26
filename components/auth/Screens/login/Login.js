import React, { Component } from 'react'
import { View, Button, Text, TextInput, TouchableOpacity } from 'react-native'
import style from './style'

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
        
    }

  validateFields = () => {
    const { email, password} = this.state;
    if ( !email.trim() || !password.trim()){
      alert('No fields can remain blank')
      return;
    }
  }

  render() {
    return ( 
      <View style = {style.container}> 
      <Text style={style.title}> Login Screen</Text>
      <View style = {style.inputView}>
        <TextInput 
            style = {style.inputText}
            placeholder = "Username or Email"
            placeholderTextColor="#003f5c"
            onChangeText = {(email) => this.setState({email})}
            />
      </View> 
      <View style = {style.inputView}>
         <TextInput
            style = {StyleSheet.TextInput}
            placeholder = "Password"
            placeholderTextColor="#003f5c"
            onChangeText = {(password) => this.setState({password})}
            />
      </View> 

      <View>
          <Button
            title='Forgot Password'
            onPress={() => this.props.navigation.navigate("ForgotPassword")}
            titleStyle = {{color: '#039BE5', }}
            type = 'clear'
          />
      </View>

        <TouchableOpacity style={style.loginBtn} 
          onPress = {() => this.props.navigation.navigate("Main")}>
            <Text style={style.loginText}>LOGIN</Text> 
        </TouchableOpacity>

        <View style = {{flexDirection: 'row'}}>
          <Text >No Account </Text>
          <Text onPress={() => this.props.navigation.navigate("Register")} style = {style.SignUpText}> Sign up </Text>
          
        </View>

      </View>
    )
  }
}



export default Login

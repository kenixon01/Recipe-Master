import React, { Component } from 'react'
import { View, Text, ImageBackground, Alert } from 'react-native'
import { InputBox, AppButton, Title } from '../../lib';
import style from './style'

  
export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastname: '',
            userName: '',
        };
    }
    
  checkInput = () =>{
    const {firstName, password, lastname, email, userName} = this.state;
    if (!firstName.trim() || !lastname.trim() || !email.trim() || !userName.trim() || !password.trim()){
      Alert.alert('Field Error','No fields can remain blank')
      return;
    }
    else if (password.length <= 8){
      Alert.alert('Password Error','Password must be at least 8 characters')
    }

  }

  render() {
    return (
      <ImageBackground 
          style = {style.image}
          source={require('../../../../assets/20221220_194217_32.jpg')}>
      <View style = {style.container}>
          <Title fontFamily="PTSansNarrow" color='#4F5200'>Sign Up</Title>
          <InputBox
            placeholder = "First Name"
            onChangeText = {(firstName) => this.setState({firstName})}
          />
          <InputBox
            placeholder = "Last Name"
            onChangeText = {(lastname) => this.setState({lastname})}
          />
          <InputBox
            keyboardType={'email-address'}
            placeholder = "Email"
            onChangeText = {(email) => this.setState({email})}
          />
          <InputBox
            placeholder = "User Name"
            onChangeText = {(userName) => this.setState({userName})}
          />
          <InputBox
            placeholder = "Password"
            secureTextEntry = {true}
            onChangeText = {(password) => this.setState({password})}
          />
          <View>
            <Text style = {style.text}>Must be at least 8 characters and include at least 1 special character</Text>
          </View>
          <AppButton onPress = {this.checkInput}>Sign Up</AppButton>
          <View style = {{flexDirection: 'row'}}>
            <Text style={style.forgotAndSignUpText}>Already have an account?</Text>
            <Text style = {style.LoginText} onPress={() => this.props.navigation.navigate("Login")}> Login </Text> 
          </View> 
      </View>
    </ImageBackground>
)}}

export default Register
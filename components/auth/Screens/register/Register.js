import React, { Component } from 'react'
import { View, Text, TextInput, ActivityIndicator, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native'
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
    const {navigation} = this.props;
  
    // while(!this.state.fontsLoaded) {
    //   this.loadFonts()
    //   return (
    //     <View style={style.activityIndicator}>
    //       <ActivityIndicator size={"large"}/>
    //     </View>
    //   )
    // }

    return (
      <ImageBackground 
          style = {style.image}
          source={require('../../../../assets/20221220_194217_32.jpg')}>
      <View style = {style.container}>
        
          <Text style={{...style.title, fontFamily: 'PTSansNarrow'}}>Sign Up</Text>
          <View style = {style.inputView}>
            <TextInput
              style = {style.inputText}
              placeholder = "First Name"
              placeholderTextColor="#003f5c"
              onChangeText = {(firstName) => this.setState({firstName})}
            />
          </View>
          <View style = {style.inputView}>
            <TextInput 
              style = {style.inputText}
              placeholder = "Last Name"
              placeholderTextColor="#003f5c"
              onChangeText = {(lastname) => this.setState({lastname})}
            />
          </View> 
          <View style = {style.inputView}>
            <TextInput 
              style = {style.inputText}
              keyboardType={'email-address'}
              placeholder = "Email"
              placeholderTextColor="#003f5c"
              onChangeText = {(email) => this.setState({email})}
            />
          </View>
          <View style = {style.inputView}>
            <TextInput 
              style = {style.inputText}
              placeholder = "User Name"
              placeholderTextColor="#003f5c"
              onChangeText = {(userName) => this.setState({userName})}
            />
          </View>  
          <View style = {style.inputView}>
            <TextInput
              style = {style.inputText}
              placeholder = "Password"
              placeholderTextColor="#003f5c"
              secureTextEntry = {true}
              autoCapitalize={'none'}
              onChangeText = {(password) => this.setState({password})}
            />
          </View> 
          <View>
            <Text style = {style.text}>Must be at least 8 characters and include at least 1 special character</Text>
          </View>
          <TouchableOpacity style={style.SignupBtn} onPress = {this.checkInput}>
            <Text style={style.signUpText}>Sign Up</Text> 
          </TouchableOpacity>
          <View style = {{flexDirection: 'row'}}>
            <Text style={style.forgotAndSignUpText}>Already have an account?</Text>
            <Text style = {style.LoginText} onPress={() => this.props.navigation.navigate("Login")}> Login </Text> 
          </View> 
      </View>
        </ImageBackground>
)}}

export default Register
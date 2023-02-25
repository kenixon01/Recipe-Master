import React, { Component, useState } from 'react'
import { View, Button, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'


  
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

    componentDidMount(){

    }
  
    // SetStates() {
    //   const [firstName, setFirstName] = useState('')
    // }
    
    checkInput = () =>{
      const {firstName, password, lastname, email, userName} = this.state;
      if (!firstName.trim() || !lastname.trim() || !email.trim() || !userName.trim() || !password.trim()){
        alert('No fields can remain blank')
        return;
      }
      else if (password.length >= 8){
        alert('Password must be at least 8 characters')
      }

    }
  render() {
    const {navigation} = this.props;
  
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
            onChangeText = {(password) => this.setState({password})}
            />
          </View> 
          <View>
            <Text style = {style.text}>Must be at least 8 characters and include at least 1 special
              character
            </Text>
          </View>
        <TouchableOpacity style={style.SignupBtn} onPress = {this.checkInput}>
            <Text>Sign Up</Text> 
        </TouchableOpacity>
        <View style = {{flexDirection: 'row'}}>
          <Text>Already have an account ?</Text>
          <Text onPress={() => this.props.navigation.navigate("Login")} style = {style.LoginText}> Login </Text>
          
        </View>
        </ImageBackground>
      </View>
    )
  }
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
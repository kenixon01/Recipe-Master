import React, { Component } from 'react'
import { View, Button, Text, TextInput, StyleSheet,
  TouchableOpacity } from 'react-native'


export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastname: '',
            userName: '',
        }

        //this.onSignUp = this.onSignUp.bind(this)
        
    }

    //onSignUp(){
       // const {email, password, name} = this.state;
        //firebase.auth().createUserWithEmailAndPassword(email,password)
        //.then((result) => {
        //  console.log(result)
        //})
        //.catch((error)=> {console.log(result)})


    //}

  render() {
    return (
      <View style = {style.container}> 
      <Text style={style.title}> Recipe Generator</Text>
      <View style = {style.inputView}>
         <TextInput
            //style = {StyleSheet.TextInput}
            placeholder = "First Name"
            placeholderTextColor="#003f5c"
            onChangeText = {(firstname) => this.setState({firstname})}
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
            //style = {StyleSheet.TextInput}
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
        <TouchableOpacity style={style.SignupBtn}>
            <Text style={style.loginText}>Sign Up</Text> 
        </TouchableOpacity>
        <View style = {{flexDirection: 'row'}}>
          <Text>Already have an account ?</Text>
          <Text onPress={() => this.props.navigation.navigate("Login")} style = {style.LoginText}> Login </Text>
          
        </View>
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#4FD3DA',
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
    backgroundColor:"#3AB4BA",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
    },
  inputText:{
    height:50,
    color:"white"
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
    }
});
export default Register
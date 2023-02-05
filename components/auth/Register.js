import React, { Component } from 'react'
import { View, Button, Text, TextInput, StyleSheet,
  TouchableOpacity } from 'react-native'


export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
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
      <Text style={style.title}> Sign Up Screen</Text>
      <View style = {style.inputView}>
         <TextInput
            //style = {StyleSheet.TextInput}
            placeholder = "Name"
            placeholderTextColor="#003f5c"
            onChangeText = {(name) => this.setState({name})}
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
            //style = {StyleSheet.TextInput}
            placeholder = "Password"
            placeholderTextColor="#003f5c"
            onChangeText = {(password) => this.setState({password})}
            />
          </View> 
        <TouchableOpacity style={style.loginBtn}>
            <Text style={style.loginText}>Sign Up</Text> 
        </TouchableOpacity>
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
      color:"#fb5b5a",
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
      loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
      },
});
export default Register
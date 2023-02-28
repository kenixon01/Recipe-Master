import React, { Component } from 'react'
import { View, Button, Text, TextInput, StyleSheet,
    TouchableOpacity } from 'react-native'

export class Login extends Component {
  
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         email: '',
    //         password: '',
    //     }
        
    // }
   

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
        color:"black",
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
        backgroundColor:"#7fff00",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
        },
        SignUpText: {
          fontWeight: 'bold',
          fontStyle: 'italic',
          textDecorationLine: 'underline'
        }
});



export default Login

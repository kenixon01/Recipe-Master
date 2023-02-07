import React, {Component} from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

class ForgotPassword extends Component {
    render() {
        return (
            <View style = {style.container}>
                <Text style={style.title}> Forgot Password</Text>
                <View style = {style.inputView}>
                    <TextInput 
                        style = {style.inputText}
                        placeholder = "Email"
                        placeholderTextColor="#003f5c"
                        onChangeText = {(email) => this.setState({email})}
                    />
                </View>
                <TouchableOpacity style={style.SignupBtn}>
                    <Text style={style.loginText}>Submit</Text> 
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
})

export default ForgotPassword
import React, {Component} from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import style from './style'

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

export default ForgotPassword
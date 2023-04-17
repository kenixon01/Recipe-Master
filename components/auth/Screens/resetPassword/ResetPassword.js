import React, {useState} from "react";
import { Text, View, TextInput, TouchableOpacity,  ImageBackground, Alert } from "react-native";
import style from './style'

export default function ResetPassword({navigation}) {
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const validatePassword = () => {
        if(password.length <= 8) {
            alert("Password must be at least 8 characters")
        } else if(password === passwordConfirm) {
            alert("Password successfully changed")
            navigation.navigate('Login')
        } else if (password != passwordConfirm) {
            alert('Passwords do not match')
        }
    }

    return (
        <View style = {style.container}>
            <Text style={{...style.title, fontFamily: 'PTSansNarrow'}}>Reset Password</Text>
            <View style = {style.inputView}>
                <TextInput 
                    style = {style.inputText}
                    placeholder = "Password"
                    keyboardType="password"
                    onChangeText = {(text) => setPassword(text)}
                />
            </View>
            <View style = {style.inputView}>
                <TextInput 
                    style = {style.inputText}
                    placeholder = "Confirm Password"
                    keyboardType="password"
                    onChangeText = {(text) =>setPasswordConfirm(text)}
                />
            </View>
            <TouchableOpacity 
                style={style.SignupBtn} 
                onPress={() => { validatePassword() }}>
                <Text style={style.loginText}>Submit</Text> 
            </TouchableOpacity>
        </View>
    )
}
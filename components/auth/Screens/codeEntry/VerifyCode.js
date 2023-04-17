import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity,  ImageBackground, Alert } from "react-native";
import style from './style'

import { useSelector } from "react-redux";
import { VALIDATE_ATTEMPT_MAX } from '@env';


export default function VerifyCode({navigation}) {
    const [code, setCode] = useState('')
    const verificationCode = useSelector((store) => store.verificationCode);

    var currentAttempt = 1

    const validateCode = () => {
        if(currentAttempt < VALIDATE_ATTEMPT_MAX) {
            if(code == verificationCode) {
                navigation.navigate('ResetPassword')
            } else {
                currentAttempt++
                alert("Invalid verification code.")
            }
        }
        else {
            alert("Verification code submission attempts exceeded.")
            navigation.navigate('Login')
        }
    }

    return (
        <View style = {style.container}>
            <Text style={{...style.title, fontFamily: 'PTSansNarrow'}}>Enter Code</Text>
            <View style = {style.inputView}>
                <TextInput 
                    style = {style.inputText}
                    placeholder = "Code"
                    onChangeText = {(text) => setCode(text)}
                />
            </View>
            <TouchableOpacity 
                style={style.SignupBtn} 
                onPress={() => validateCode()}>
                <Text style={style.loginText}>Submit</Text> 
            </TouchableOpacity>
        </View>
    )
}
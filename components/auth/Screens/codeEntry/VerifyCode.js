import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity,  ImageBackground, Alert } from "react-native";
import style from './style'
import { useSelector } from "react-redux";


export default function VerifyCode({navigation}) {
    const [code, setCode] = useState('')
    const verificationCode = useSelector((store) => store.verificationCode);

    return (
        <ImageBackground
            style = {style.image}
            source={require('../../../../assets/20221230_143041_213.jpg')}>
            <View style = {style.container}>
                <Text style={{...style.title, fontFamily: 'PTSansNarrow'}}>Verification Code</Text>
                <View style = {style.inputView}>
                    <TextInput 
                        style = {style.inputText}
                        placeholder = "Code"
                        placeholderTextColor="#003f5c"
                        onChangeText = {(text) => setCode(text)}
                    />
                </View>
                <TouchableOpacity 
                    style={style.SignupBtn} 
                    onPress={() => {
                        (verificationCode === code) ? 
                        navigation.navigate('ResetPassword') :
                        alert('Invalid verification code')
                    }}>
                    <Text style={style.loginText}>Submit</Text> 
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
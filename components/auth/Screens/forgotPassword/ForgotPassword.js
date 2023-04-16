import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity,  ImageBackground, Alert } from "react-native";
import style from './style'
import sendEmail from "../../../../sendEmail";
import { useDispatch } from "react-redux";
import { setVerifcationCode } from "../../../../actions";


//recipemaster@outlook.com
//$ytkOpKHRW545*/sads*
//1-1-1999
export default function ForgotPassword({navigation}) {
    const [email, setEmail] = useState('')
    
    const dispatch = useDispatch();
  
    const handleVerificationCode = (data) => {
      dispatch(setVerifcationCode(data))
    }

    return (
        <ImageBackground
            style = {style.image}
            source={require('../../../../assets/20221230_143041_213.jpg')}>
            <View style = {style.container}>
                <Text style={{...style.title, fontFamily: 'PTSansNarrow'}}>Reset Password</Text>
                <View style = {style.inputView}>
                    <TextInput 
                        style = {style.inputText}
                        placeholder = "Email"
                        keyboardType="email"
                        placeholderTextColor="#003f5c"
                        onChangeText = {(text) => setEmail(text)}
                    />
                </View>
                <TouchableOpacity 
                    style={style.SignupBtn} 
                    onPress={() => {
                        handleVerificationCode(sendEmail(email))
                        alert('Reset password email successfully sent.')
                        navigation.navigate('CodeEntry')}}>
                    <Text style={style.loginText}>Submit</Text> 
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
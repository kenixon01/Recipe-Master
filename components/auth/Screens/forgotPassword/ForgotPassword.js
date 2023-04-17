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

    const verify = () => {
        if(email && email.includes('@')) {
            handleVerificationCode(sendEmail(email))
            Alert.alert("",'Reset password email successfully sent.  Allow a few minutes to recieve the verification code.')
            navigation.navigate('CodeEntry')
        }
        else {
            Alert.alert("","Invalid email address")
        }
    }

    return (
        <View style = {style.container}>
            <Text style={{...style.title, fontFamily: 'PTSansNarrow'}}>Forgot Password</Text>
            <View style = {style.inputView}>
                <TextInput 
                    style = {style.inputText}
                    placeholder = "Email"
                    keyboardType={"email-address"}
                    onChangeText = {(text) => setEmail(text)}
                />
            </View>
            <TouchableOpacity 
                style={style.SignupBtn} 
                onPress={() => {verify()}}>
                <Text style={style.loginText}>Submit</Text> 
            </TouchableOpacity>
        </View>
    )
}
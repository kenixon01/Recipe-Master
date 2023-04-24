import React, { useState } from "react";
import { View, Alert } from "react-native";
import style from './style'
import sendEmail from "../../sendEmail";
import { useDispatch } from "react-redux";
import { setVerifcationCode } from "../../../../actions";
import { Title, InputBox, AppButton } from "../../lib";

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
            <Title 
                fontFamily={'PTSansNarrow'}
                fontSize={40}
                color={'#4F5200'}>Forgot Password</Title>
            <InputBox
                placeholder = "Email"
                keyboardType={"email-address"}
                onChangeText = {(text) => setEmail(text)}
            />
            <AppButton onPress={() => {verify()}}>Submit</AppButton>
        </View>
    )
}
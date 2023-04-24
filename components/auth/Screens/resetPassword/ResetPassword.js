import React, {useState} from "react";
import { View } from "react-native";
import style from './style'
import { Title, AppButton, InputBox } from "../../lib";

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
            <Title
                color='#4F5200'
                fontFamily='PTSansNarrow'
                fontSize={40}>Reset Password</Title>
            <InputBox
                placeholder = "Password"
                keyboardType="password"
                secureTextEntry={true}
                onChangeText = {(text) => setPassword(text)}
            />
            <InputBox
                placeholder = "Confirm Password"
                keyboardType="password"
                onChangeText = {(text) =>setPasswordConfirm(text)}
                secureTextEntry={true}
            />
            <AppButton onPress={() => { validatePassword() }}>Submit</AppButton>
        </View>
    )
}
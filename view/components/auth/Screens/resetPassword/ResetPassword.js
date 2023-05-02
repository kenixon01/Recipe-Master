import React, {useState, useEffect} from "react";
import { View, Alert } from "react-native";
import style from './style'
import { Title, AppButton, InputBox } from "../../lib";
import { gql, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from "react-redux";

const UPDATE_PASSWORD_MUTATION = gql`
mutation updatePassword($email: String!, $password: String!) {
  updatePassword(input: { email: $email, password: $password}) {
    token
    user {
      name
      email
    }
  }
}
`;

export default function ResetPassword({navigation}) {
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [updatePassword, {data, error, loading}] = useMutation(UPDATE_PASSWORD_MUTATION)
    const email = useSelector((store) => store.email)

    useEffect(() => {
        console.log(email)
        if (error) {
          Alert.alert('Account does not exist');
          
        }
    },[error])
    
    if (data) {
    // save token
    AsyncStorage
        .setItem('token', data.updatePassword.token)
        .then(() => {
        // redirect home
        navigation.navigate('Login')
        })
    }
      
    const onSubmit = () => {
    if(validatePassword) {
        updatePassword({variables: { email: email, password: password }})
        .then(response => {
            console.log(`Response: ${response}`)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    }
    }

    const validatePassword = () => {
        const valid = false
        if(password.length <= 8) {
            alert("Password must be at least 8 characters")
        } else if(password === passwordConfirm) {
            alert("Password successfully changed")
            valid = true
        } else if (password != passwordConfirm) {
            alert('Passwords do not match')
        }
        return valid
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
            <AppButton onPress={() => { onSubmit() }}>Submit</AppButton>
        </View>
    )
}
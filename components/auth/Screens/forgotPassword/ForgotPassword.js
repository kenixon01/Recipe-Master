import React from "react";
import { Text, View, TextInput, TouchableOpacity,  ImageBackground } from "react-native";
import style from './style'

export default function ForgotPassword({navigation}) {

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
                        onChangeText = {(email) => this.setState({email})}
                    />
                </View>
                <TouchableOpacity style={style.SignupBtn}>
                    <Text style={style.loginText}>Submit</Text> 
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
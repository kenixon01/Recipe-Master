import React, { useState } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity,  ImageBackground, Alert } from "react-native";
import style from './style'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

import { useSelector } from "react-redux";
import { VALIDATE_ATTEMPT_MAX } from '@env';


var currentAttempt = 1

export default function VerifyCode({navigation}) {
    const [value, setValue] = useState('')
    const verificationCode = useSelector((store) => store.verificationCode);
    const CELL_COUNT = verificationCode.length

    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const validateCode = () => {
        console.log(currentAttempt)
        if(currentAttempt < VALIDATE_ATTEMPT_MAX) {
            if(value.toUpperCase() === verificationCode.toUpperCase()) {
                navigation.navigate('ResetPassword')
            } else {
                currentAttempt++
                Alert.alert("","Invalid verification code.")
            }
        }
        else {
            Alert.alert("","Verification code submission attempts exceeded.")
            navigation.navigate('Login')
        }
    }

    return (
        <View style = {style.container}>
            <Text style={{...style.title, fontFamily: 'PTSansNarrow'}}>Enter Code</Text>
            <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                caretHidden={false}
                autoFocus={true}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={style.codeFieldRoot}
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <View
                    key={index}
                    onLayout={getCellOnLayoutHandler(index)}
                    >
                    <Text
                        key={index}
                        style={[style.cell, isFocused && style.focusCell]}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                    </View>
                            
                )}
            />
            </SafeAreaView>
            <TouchableOpacity 
                style={style.SignupBtn} 
                onPress={() => validateCode()}>
                <Text style={style.loginText}>Verify</Text> 
            </TouchableOpacity>
        </View>
    )
}
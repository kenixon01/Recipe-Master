import React, { useState } from "react";
import { Text, View, SafeAreaView, Alert } from "react-native";
import style from './style'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

import { useSelector } from "react-redux";
import { VALIDATE_ATTEMPT_MAX } from '@env';
import { Title, AppButton } from "../../lib";


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
            <Title 
                fontFamily='PTSansNarrow' 
                color='#4F5200'
                fontSize={40}>Enter Code</Title>
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
            <AppButton onPress={() => validateCode()}>Verify</AppButton>
        </View>
    )
}
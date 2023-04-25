import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import style from './style'

export default function ListEditor({navigation}){
    return (
        <View style = {style.container}>
            <Text style = {style.Title}>List Editor</Text>
        <View style = {style.inputView}>
            <TextInput
                //style = {StyleSheet.TextInput}
                placeholder = "Click to add"
                placeholderTextColor="#003f5c"
                />
        </View> 

        <IconButton
            icon = {props => <Icon name = "account-settings"{...props} />}
            onPress = {() => navigation.navigate("Settings")}
            style= {style.AccountBtn}
            />

      

        <IconButton
            icon={props => <Icon name="magnify" {...props}  />}
            onPress = {() => navigation.navigate("Result")}
            color="red"
            style = {style.SearchButton}
            />
        </View>
    );
}


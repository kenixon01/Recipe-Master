import { View, Text, TextInput, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import style from './style'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sethandleAddItem, sethandleEdit, setdeleteItem} from '../../../../actions';


export default function ListEditor({navigation}){

    const [newItem, setNewItem] = useState('');
    const [editItem, setEditItem] = useState({ index: null, value: '' });
    const itemList = useSelector((store) => store.list); 

    const dispatch = useDispatch();

    //change up code in these functions
    function handleAddItem(e) {
        dispatch(sethandleAddItem(e));
    }

    function handleEdit(e) {
      dispatch(sethandleEdit(e));
    }

    function handleDelete(index) {
      dispatch(setdeleteItem(index));
    }
    return (

        <SafeAreaView style = {style.container}>
            <Text style = {style.Title}>List Editor</Text>
            <View style = {style.inputView}>
                <TextInput
                    placeholder = "Click to add"
                    placeholderTextColor="#003f5c"
                    onChangeText = {setNewItem}
                    value = {newItem}
                    onSubmitEditing = {() => handleAddItem(newItem)}
                />
            </View> 
            <FlatList
                data = {itemList.items}
                renderItem = {({ item, index }) => <View key = {index}><Text>{item} </Text></View>}
                keyExtractor = {(item, index) => index}
            />

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

        </SafeAreaView>
    );
};
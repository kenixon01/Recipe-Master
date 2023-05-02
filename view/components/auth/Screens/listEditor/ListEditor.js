
import * as React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import style from './style'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sethandleAddItem, sethandleEdit, setdeleteItem} from '../../../../actions';


export default function ListEditor({navigation}){

    const [newItem, setNewItem] = useState('');
    const [editItem, setEditItem] = useState({ index: null, value: '' });
    const items = useSelector((store) => store.items); //returns null/undefined

    const dispatch = useDispatch();

    //change up code in these functions
    function handleAddItem(e) {
        dispatch(sethandleAddItem(e));
    }

    function handleEdit(e) {
      dispatch(sethandleEdit(e));
      //setEditItem({ index: null, value: '' });
    }

    function handleDelete(index) {
      dispatch(setdeleteItem(index));
    }



    return (
        
        <View style = {style.container}>
            <Text style = {style.Title}>List Editor</Text>
        <View style = {style.inputView}>
            <TextInput
                placeholder = "Click to add"
                placeholderTextColor="#003f5c"
                onChangeText = {setNewItem}
                value = {newItem}
                onSubmitEditing = {() => console.log("Item added")}
            />
                <FlatList
                    keyExtractor = {(item) => item} 
                    data = {items}
                    renderItem = {({ item }) => <Text>{item}</Text>}
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

        <div>
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} onSubmitEditing={handleAddItem} />
            <ul>
            {items.map((item, index) => (
                <li key={index}>
                {index === editItem.index ? (
                    <form onSubmit={handleEdit}>
                    <input type="text" value={editItem.value} onChange={(e) => setEditItem({ ...editItem, value: e.target.value })} />
                    <button type="submit">Add</button>
                    </form>
                ) : (
                    <div>
                    {item}
                    <button onClick={() => setEditItem({ index, value: item })}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                )}
                </li>
            ))}
            </ul>
        </div>

        </View>
    );
};

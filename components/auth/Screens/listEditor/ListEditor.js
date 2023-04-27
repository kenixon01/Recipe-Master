import * as React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import style from './style'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import listReducer from './listReducer.js'


export default function ListEditor({navigation}){

    const [newItem, setNewItem] = useState('');
    const [editItem, setEditItem] = useState({ index: null, value: '' });
    const [state, dispatch] = useReducer(listReducer, { items: [] });
    const items = useSelector((state) => state.items);

    function handleAddItem(e) {
      if (e.key === 'Enter') {
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        setNewItem('');
      }
    }

    function handleEdit(e) {
      e.preventDefault();
      dispatch({ type: 'EDIT_ITEM', payload: { index: editItem.index, updatedItem: editItem.value } });
      setEditItem({ index: null, value: '' });
    }

    function handleDelete(index) {
      dispatch({ type: 'DELETE_ITEM', payload: index });
    }

    return (
        
        <View style = {style.container}>
            <Text style = {style.Title}>List Editor</Text>
        <View style = {style.inputView}>
            <TextInput
                onChangeText = {(text) => setNewItem(text)}
                placeholder = "Click to add"
                placeholderTextColor="#003f5c"
                value = {newItem}
                onKeyPress = {handleAddItem} 
            />
                <FlatList
                    keyExtractor = {(item, index) => index.toString()}
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
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} onKeyPress={handleAddItem} />
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

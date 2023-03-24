import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setData } from '../../../../actions/index';
import { API_ID, API_KEY } from '@env'
import styles from './style'

export default function MainScreen ({navigation}) {
  const [search, setSearch] = useState('');
  const [textInput, setTextInput] = useState('');

  const dispatch = useDispatch();

  const handleDataChange = (data) => {
    dispatch(setData(data))
  }
 
  const getRecipes = async (search) => {
    setSearch(search)
    const URL = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    fetch(URL).then(response => {
      return response.json();
    }).then(responseData => {
      handleDataChange(responseData);
    }).catch(error => {
      console.error(error);
    })
  }

  return(
    <View style = {styles.container} >
      <Text style = {styles.title}>Welcome, User</Text>

      <View style = {styles.greenBox}>
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Search for a recipe or ingredient"
              placeholderTextColor="#003f5c"
              onSubmitEditing={newSearch => {
                getRecipes(newSearch.nativeEvent.text);
                navigation.navigate("Result");
                setTextInput('');
              }}
              onChangeText={text => setTextInput(text)}
              defaultValue={search}
              clearButtonMode='always'
              value={textInput}
          />
        </View>
      </View>
        <View style = {styles.whiteBox}>
          <Text style = {styles.header}>Popular Searches</Text>
          <Text style = {styles.SmallerTxt}>Try one of these!</Text>
        </View>

        <View style ={styles.greenBox}>
          <Text style = {styles.header}>Recommend Recipes</Text>
        </View>
    </View>
    )
  
}
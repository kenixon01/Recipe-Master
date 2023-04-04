import React, { useState } from 'react'
import { Text, View, TextInput, Image, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setAPICallLoading } from '../../../../actions/index';
import { API_ID, API_KEY } from '@env'
import { useFonts } from 'expo-font';
import styles from './style'


export default function MainScreen ({navigation}) {
  
  const [search, setSearch] = useState('');
  const [textInput, setTextInput] = useState('');

  const [loaded] = useFonts({
    CairoPlay: require('../../../../assets/fonts/CairoPlay-ExtraBold.ttf'),
  });

  
  const apiLoading = useSelector((store) => store.isLoading);

  const dispatch = useDispatch();

  const handleDataChange = (data) => {
    dispatch(setData(data))
  }

  const handleAPILoadingStateChange = (data) => {
    dispatch(setAPICallLoading(data))
  }
 
  const getRecipes = async (search) => {
    handleAPILoadingStateChange(true)
    setSearch(search)
    const URL = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    fetch(URL).then(response => {
      return response.json();
    }).then(responseData => {
      handleDataChange(responseData);
    }).catch(error => {
      console.error(error);
    })
    handleAPILoadingStateChange(false)
  }
  
  while (!loaded) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }

  return(
    <SafeAreaView>
      <ScrollView>
        <View style = {styles.container} >
        <Image source={require('../../../../assets/20220901_133028_HDR2.jpg')} style={styles.image}/>
        <Text style = {{...styles.title, fontFamily: 'CairoPlay' }}>Welcome, User</Text>
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
            <Text style = {styles.header}>Recommended Recipes</Text>
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
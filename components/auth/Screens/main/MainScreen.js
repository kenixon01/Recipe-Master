import React, { useState } from 'react'
import { Text, View, TextInput, Image, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setAPICallLoading, setRecentSearches } from '../../../../actions/index';
import { API_ID, API_KEY } from '@env'
import styles from './style'


export default function MainScreen ({navigation}) {
  
  const [search, setSearch] = useState('');
  const [textInput, setTextInput] = useState('');
  
  const dispatch = useDispatch();

  const handleDataChange = (data) => {
    dispatch(setData(data))
  }

  const MAX_SEARCH_RESULTS = 10;

  const handleAPILoadingStateChange = (data) => {
    dispatch(setAPICallLoading(data))
  }

  const handleRecentSearches = (data) => {
    dispatch(setRecentSearches(data, MAX_SEARCH_RESULTS))
  }

  const recentSearches = useSelector((store) => store.searches);

  const getRecipes = async (search) => {
    handleAPILoadingStateChange(true)
    setSearch(search)
    const URL = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    fetch(URL).then(response => {
      return response.json();
    }).then(responseData => {
      handleDataChange(responseData);
      if(responseData.hits.length) handleRecentSearches(search)
    }).catch(error => {
      console.error(error);
    })
    handleAPILoadingStateChange(false)
  }

  const queryResultsNav = (query) => {
    getRecipes(query)
    navigation.navigate("Result")
    setTextInput('')
  }

  return(
    <SafeAreaView>
      <ScrollView>
        <View style = {styles.container} >
          <Image source={require('../../../../assets/20220901_133028_HDR2.jpg')} style={styles.image}/>
          <Text style = {{...styles.title, fontFamily: 'PTSansNarrow' }}>Welcome, User</Text>
          <View style = {styles.greenBox}>
          <View style = {styles.inputView}>
            <TextInput 
                style = {styles.inputText}
                placeholder = "Search for a recipe or ingredient"
                onSubmitEditing={newSearch => {
                  queryResultsNav(newSearch.nativeEvent.text)
                }}
                onChangeText={text => setTextInput(text)}
                defaultValue={search}
                clearButtonMode='always'
                value={textInput}
            />
          </View>
        </View>
          <View style = {styles.whiteBox}>
            <View>
              {
                !recentSearches.length ? 
                  <Text style = {styles.SmallerTxt}>Start searching for recipes!</Text> :
                  <View>
                    <Text style = {styles.header}>Recent Searches</Text>
                    <Text style = {styles.SmallerTxt}>Try one of these!</Text>
                    { <View style = {styles.allRecentSearches}>
                        {
                          recentSearches.slice(0, 10).map((element, index) => {
                            const randColor = `rgb(${Math.random() * 56 + 200},${Math.random() * 156 + 100},${Math.random() * 100})`
                            return (
                              <View 
                                onPress={() => queryResultsNav(element)} 
                                key={index} 
                                style = {{...styles.recentSearches, backgroundColor: randColor}}>
                                <Text style={styles.recentSearchText}>{element}</Text>
                              </View>
                            )
                        })}
                      </View>
                    }
                  </View>
              }
            </View>
          </View>

          <View style ={styles.greenBox}>
            <Text style = {styles.header}>Favorite Recipes</Text>
          </View>
          <View style = {styles.whiteBox}>
            <Text style = {styles.header}>Explore</Text>
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
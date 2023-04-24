import React, { useState } from 'react'
import { Text, View, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setAPICallLoading, setRecentSearches } from '../../../../actions/index';
import styles from './style'
import {Section, Title, SearchBox, Tag} from '../../lib';
import { API_ID, API_KEY, ENDPOINT } from '@env'

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
    search = 'cheese'
    setSearch(search)
    const URL = `${ENDPOINT}q=${search}&app_id=${API_ID}&app_key=${API_KEY}&to=${MAX_SEARCH_RESULTS}`
    fetch(URL).then(response => {
      return response.json();
    }).then(responseData => {
      handleDataChange(responseData)
      if(responseData.hits.length) {
        handleRecentSearches(search)
      }
    }).catch(error => {
      console.error(error);
    })
    handleAPILoadingStateChange(false)
  }

  const queryResultsNav = (search) => {
    getRecipes(search)
    navigation.navigate("Result")
    setTextInput('')
  }
  const generateRecentSearches = () => {
    if(recentSearches.length) { 
      return <Text style = {styles.SmallerTxt}>Start searching for recipes!</Text>
    }
    return(
      <View>
        <Header>Recent Searches</Header>
        <Text style = {styles.SmallerTxt}>Try one of these!</Text>
          <View style = {styles.allRecentSearches}>
            {
              recentSearches.slice(0, 10).map((element, index) => {
                const randColor = `rgb(${Math.random() * 56 + 200},${Math.random() * 156 + 100},${Math.random() * 100})`
                return (
                  <Tag
                    onPress={() => queryResultsNav(element)} 
                    key={index} 
                    backgroundColor={randColor}
                  >{element}</Tag>
                )
            })}
          </View>
      </View>
    )
  }

  return(
    <SafeAreaView>
      <ScrollView>
        <View style = {styles.container} >
          <Image source={require('../../../../assets/20220901_133028_HDR2.jpg')} style={styles.image}/>
          <Title 
            fontFamily={"PTSansNarrow" }
            color={'#BFA600'}
            fontSize={40}
            textAlign={'center'}
          >Welcome, User</Title>
          <Section backgroundColor={'#4F5200'}>
            <SearchBox
              placeholder = "Search for a recipe or ingredient"
              onSubmitEditing={newSearch => {
                queryResultsNav(newSearch.nativeEvent.text)
              }}
              onChangeText={text => setTextInput(text)}
              defaultValue={search}
              clearButtonMode='always'
              value={textInput}/>
          </Section>
          <Section backgroundColor={'white'}>
            {generateRecentSearches()}
          </Section>
          <Section backgroundColor={'#4F5200'}>
            <Header>Favorite Recipes</Header>
          </Section>
          <Section backgroundColor={'white'}>
            <Header>Explore</Header>
          </Section>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
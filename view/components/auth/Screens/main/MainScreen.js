import React, { useState } from 'react'
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../../../actions/index';
import styles from './style'
import {Section, Title, SearchBox, Tag} from '../../lib';

export default function MainScreen ({navigation}) {
  
  const [search, setSearch] = useState('');
  const [textInput, setTextInput] = useState('');
  
  const recentSearches = useSelector((store) => store.searches);

  const dispatch = useDispatch();

  const handleQuery = (data) => {
    dispatch(setQuery(data))
  }

  const queryResultsNav = (search) => {
    handleQuery(search)
    navigation.navigate("Result")
    setTextInput('')
  }
  const generateRecentSearches = () => {
    if(!recentSearches.length) { 
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
                    index={index} 
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
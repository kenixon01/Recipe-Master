import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setData } from '../../../actions/index';
import { API_ID, API_KEY } from '@env'
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
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white',
    },
  title:{
    fontWeight: "bold",
    fontSize:50,
    color:'black',
    marginBottom: 40,
    textAlign:'center'
    },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    padding:20,
    justifyContent:"center",
    alignItems:'center',
    },
  inputText:{
      height:50,
      color:"black"
    },
  header:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  SmallerTxt:{
    fontSize: 15,
    fontStyle:'italic',
    textAlign:'center',
    color:'#228b22',
  },
  greenBox:{
    backgroundColor:'#D6E4CD',
    height: 150,
    justifyContent:'center',
    alignItems:'center',
  },
  whiteBox:{
    backgroundColor:'white',
    height: 150,
    justifyContent:'center',
    alignItems:'center',
  },
});
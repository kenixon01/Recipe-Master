import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAPICallLoading, setData } from '../../../actions/index';

export default function MainScreen ({navigation}) {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleDataChange = (data) => {
    dispatch(setData(data))
  }

  const handleAPICallLoading = () => {
    dispatch(setAPICallLoading())
  }

    

  const getRecipes = async (search) => {
    setSearch(search)
    // const TO = 15;
    const ID = '641facf1';
    const KEY = '3bd1c423730ce9650260fd3d5cdabe98';
    const URL = `https://api.edamam.com/search?q=${search}&app_id=${ID}&app_key=${KEY}`

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

        {/* <App/> */}
      <View style = {styles.greenBox}>
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Search for a recipe or ingredient"
              placeholderTextColor="#003f5c"
              onSubmitEditing={newSearch => {
                getRecipes(newSearch.nativeEvent.text);
                navigation.navigate("Result");
              }}
              defaultValue={search}
              />
          
        </View>

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
import React, { useEffect, useState, useCallback} from 'react';
import { View, Text, Button, FlatList, SafeAreaView, Modal, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRecentSearches } from '../../../../actions/index';
import { Tile } from '@rneui/themed';

import {Title, Header, Caption} from '../../lib';
import styles from './style'
import { API_ID, API_KEY, ENDPOINT, MAX_SEARCH_RESULTS } from '@env'
import style from './style';

export default function Results({navigation}){
    const [recipes, setRecipes] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    const [index, setIndex] = useState(0)
    const query = useSelector((store) => store.query);

    const dispatch = useDispatch();

    const handleRecentSearches = (data) => {
        dispatch(setRecentSearches(data))
    }

    const fetchRecipes = async (index) => {
        try {
            const URL = `${ENDPOINT}q=${query}&app_id=${API_ID}&app_key=${API_KEY}&to=${index + MAX_SEARCH_RESULTS}&from=${index}`
            const response = await fetch(URL)
            const json = await response.json()
            handleRecentSearches(query)
            return json.hits
        } catch (error) {
            console.error(error)
            return []
        }
    }

    const OpenURLButton = ({url, children}) => {
        const handlePress = useCallback(async () => {
          // Checking if the link is supported for links with custom URL scheme.
          const supported = await Linking.canOpenURL(url);
      
          if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
          } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
          }
        }, [url]);
      
        return <Button title={children}
        color={'#4F5200'} onPress={handlePress} />
      };

    useEffect(() => {
        fetchRecipes(currentIndex).then(data => setRecipes(data))
    }, [])
    return (
        <SafeAreaView style = {styles.container}>
            <Title textAlign={"center"} fontFamily="PTSansNarrow" backgroundColor={"black"} color={"white"}> Results</Title>
            <FlatList 
                data={recipes}
                renderItem={({item,index}) =>  
                <View style = {{flex:2 , backgroundColor: 'black' }} key={index}>
                    <Tile
                        imageSrc={{uri: item.recipe.image}}
                        title={item.recipe.label + " \n "+ "Calories: "+ Math.round(item.recipe.calories)}
                        titleStyle = {{color:"white"}}
                        caption= {item.recipe.calories}
                        onPress={() => {
                            setModalVisible(true)
                            setIndex(index)}}
                    />
                    </View>}
                keyExtractor={item => item.recipe.uri}
                extraData={currentIndex}
            /> 
            <View style={style.modalContainer}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed')
                        setModalVisible(!modalVisible)
                    }}>
                    {
                        (modalVisible) ?
                            <View style={style.modal}>
                                <Header>{recipes[index].recipe.label}</Header>
                                <View style={style.information}>
                                    <Caption>Cuisine: {recipes[index].recipe.cuisineType}</Caption>
                                    <Caption>Cook Time {recipes[index].recipe.totalTime} minutes</Caption>
                                    <Caption>Serves {recipes[index].recipe.yield}</Caption>
                                </View>

                                {recipes[index].recipe.ingredientLines.map((ingredient, index) => {
                                    return <Text key={index} style={style.ingredient}>- {ingredient}</Text>
                                })}

                                <View style={style.buttons}>
                                    <OpenURLButton url={recipes[index].recipe.url}>Open in browser</OpenURLButton>
                                    <Button title="Hide modal" color={'#4F5200'} onPress={() => setModalVisible(!modalVisible)}/> 
                                </View>
                            </View>
                        : <View></View>
                    }
                </Modal>
            </View>
        </SafeAreaView>
    );
}

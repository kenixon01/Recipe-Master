import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, Modal, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRecentSearches } from '../../../../actions/index';
import { Tile } from '@rneui/themed';

import {Title} from '../../lib';
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
                                <Text style={style.recipeLabel}>{recipes[index].recipe.label}</Text>
                                <Text style={style.recipeInfo}>Cuisine: {recipes[index].recipe.cuisineType}</Text>
                                <Text style={style.recipeInfo}>Cook Time {recipes[index].recipe.totalTime} minutes</Text>
                                <Text style={style.recipeInfo}>Serves {recipes[index].recipe.yield}</Text>
                                <Text style={style.recipeInfo}>{recipes[index].recipe.calories} calories</Text>
                                <Text style={style.label}>{recipes[index].recipe.url}</Text>
                        
                                {recipes[index].recipe.ingredientLines.map((ingredient, index) => {
                                    return <Text key={index} style={style.ingredient}>{ingredient}</Text>
                                })}

                                <Button title="Hide modal" onPress={() => setModalVisible(!modalVisible)}/> 
                            </View>
                        : <View></View>
                    }
                </Modal>
            </View>
        </SafeAreaView>
    );
}

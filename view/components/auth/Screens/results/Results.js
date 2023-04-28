import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRecentSearches } from '../../../../actions/index';
import styles from './style'
import { API_ID, API_KEY, ENDPOINT, MAX_SEARCH_RESULTS } from '@env'

export default function Results({navigation}){
    const [recipes, setRecipes] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
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
            <Text style = {styles.Title}>Results</Text>
            <FlatList
                data={recipes}
                renderItem={({item}) => <View><Text>{item.recipe.label}</Text></View>}
                keyExtractor={item => item.recipe.uri}
            />
            <Button title="Load More"/>
        </SafeAreaView>
    );
}
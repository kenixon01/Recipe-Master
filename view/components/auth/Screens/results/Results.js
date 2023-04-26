import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
        const URL = `${ENDPOINT}q=${query}&app_id=${API_ID}&app_key=${API_KEY}&to=${index + MAX_SEARCH_RESULTS}&from=${index}`
        const response = await fetch(URL)
        const json = await response.json()
        const data = json.hits
        console.log(data)
        if(data){
            handleRecentSearches(query)
        }
        return json.hits
    }

    useEffect(() => {
        setRecipes(fetchRecipes(currentIndex))
    }, [])

    return (
        <View style = {styles.container}>
            <Text style = {styles.Title}>Results</Text>
            <View>
                
            </View>
        </View>
    );
}
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, Modal, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRecentSearches } from '../../../../actions/index';
import { Tile } from '@rneui/themed';

import {Title} from '../../lib';
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

        </SafeAreaView>
    );
}

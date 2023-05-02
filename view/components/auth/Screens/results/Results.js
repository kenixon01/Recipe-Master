import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, Modal, ScrollView, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRecentSearches } from '../../../../actions/index';

import {Header, Caption} from '../../lib';
import styles from './style'
import { API_ID, API_KEY, ENDPOINT, MAX_SEARCH_RESULTS } from '@env'
import style from './style';

export default function Results({navigation}){
    

    return (
        <SafeAreaView style = {styles.container}>
        </SafeAreaView>
    );
}
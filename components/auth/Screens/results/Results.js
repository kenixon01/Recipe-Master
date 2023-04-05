import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector } from 'react-redux';
import styles from './style'

export default function Results({navigation}){
    
    const apiData = useSelector((store) => store.data);
    const apiDataLoading = useSelector((store) => store.isLoaded);

    const loadingConditions = apiData.hits === undefined || apiDataLoading;
    while (loadingConditions) {
        return (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size={"large"}/>
          </View>
        )
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.Title}>Results</Text>
            <IconButton
                icon = {props => <Icon name = "account-settings"{...props} />}
                onPress = {() => navigation.navigate("Settings")}
                style= {styles.AccountBtn}
                />
            <View>
                { 
                    (apiData === undefined) ? <Text>Loading...</Text> :
                    (apiData.hits.length === 0) ? 
                        <Text>No results found</Text>
                    :
                    apiData.hits.map((e, index) => {
                        return (<Text key = {index}>{e.recipe.label}</Text>)
                    }) 
                }
            </View>
        </View>
    );
}
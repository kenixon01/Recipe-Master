import * as React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector } from 'react-redux';
import styles from './style'

export default function Results({navigation}){
    
    const data = useSelector((store) => store.data);

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
                    (data === undefined) ? <Text>Loading...</Text> :
                    (data.hits.length === 0) ? 
                        <Text>No results found</Text>
                    :
                    data.hits.map((e, index) => {
                        return (<Text key = {index}>{e.recipe.label}</Text>)
                    }) 
                }
            </View>
        </View>
    );
}
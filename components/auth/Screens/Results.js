import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector } from 'react-redux';

export default function Results({navigation}){
    const data = useSelector((store) => store.data);
    console.log(isLoading);

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
                    (data.hits.length === 0 ? <Text>No results found</Text> :
                    data.hits.map((e, index) => {
                      return (<Text key = {index}>{e.recipe.label}</Text>)
                    }))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical:10,
        flex:1
    },
    Title: {
        fontSize: 40,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',    
    },
    SearchButton:{
       position:'absolute',
       bottom:35,
       right:0
    },
    inputView:{
        backgroundColor:"white",
        borderRadius:25,
        margin:15,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        textAlign:'center',
        textAlignVertical:'top',
        },
    AccountBtn:{
        position:'absolute',
        top: 35,
        right: 0,
    },
    
    
});
import * as React from 'react';
import { View, Text, TextInput, FlatList, SafeAreaView } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import style from './style'

export default function ListEditor({navigation}){
    const App = () => {
        const [search, setSearch] = useState(' ');
        const [filteredDataSource, setFilteredDataSource] = useState([]);
        const [masterDataSource, setMasterDataSource] = useState([]);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
        },[]);

        const searchFilterFunction = (text) => {
            //checking if searched etxt isn't blank
            if (text) {
                //inserted text is not blank then filter the masterdatasource then update filtereddatasource
                const newData = masterDataSource.filter(function (item) {
                    const itemData = item.title
                        ? item.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
                setFilteredDataSource(newData);
                setSearch(text);
            }
            else {
                //inserted text is blank so update filteredDatasource with masterdatasource
                setFilteredDataSource(masterDataSource);
                setSearch(text);
            }
        };

        const ItemView = ({item}) => {
            return(
                //flat list item
                <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}>
                {item.id}
                {'.'}
                {item.title.toUpperCase()}
                </Text>
            );
        };

        const ItemSeparatorView = () => {
            return(
                //flat list item separator
                <View
                    style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                    }}
                />
            );
        };

        const getItem = (item) => {
            //function for click on an item
            alert('Id : ' + item.id + ' Title :' + item.title);
        };
    }

    return (
        
        <View style = {style.container}>
            <Text style = {style.Title}>List Editor</Text>
        <View style = {style.inputView}>
            <TextInput
                //style = {StyleSheet.TextInput}
                placeholder = "Click to add"
                placeholderTextColor="#003f5c"
                />
        </View> 

        <IconButton
            icon = {props => <Icon name = "account-settings"{...props} />}
            onPress = {() => navigation.navigate("Settings")}
            style= {style.AccountBtn}
            />

        <IconButton
            icon={props => <Icon name="magnify" {...props}  />}
            onPress = {() => navigation.navigate("Result")}
            color="red"
            style = {style.SearchButton}
            />


        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Search Here"
                />
                <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                />
            </View>
            </SafeAreaView>    
        </View>
    );
};

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    },
});


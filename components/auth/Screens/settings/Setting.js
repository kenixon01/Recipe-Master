import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Alert, ScrollView, SafeAreaView } from 'react-native';
import styles from './style';
import { useFonts } from 'expo-font';
import App from '../../../../App';

export default function SettingsScreen ({navigation}){
    const [loaded] = useFonts({
        CairoPlay: require('../../../../assets/fonts/CairoPlay-ExtraBold.ttf'),
    });

    const [shouldshow, setshouldShow] = useState(false);
    //const [darkMode, setDarkMode] = useState(false);
    const [isShowing, setIsShowing] = useState(false);
    const [deleteAcct, setDeleteAcct] = useState(false);

    const [isOn , setIsOn] = useState(false);
    const onToggleSwitch = () => setIsOn(!isOn);

    const handleLogout = () => {
        navigation.navigate("Login");
        // Alert.alert('Account has been deleted',
        // [ {text: 'Okay'} ],
        //   { cancelable: false })
    }
    if(!loaded) {
        return null;
    }

    if(deleteAcct) {
        return <App/>
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style = {styles.container}>
                    <Text style = {{...styles.title, fontFamily: "CairoPlay"}}>Settings</Text>
                    <TouchableOpacity onPress={() => setshouldShow(!shouldshow)}> 
                        <Text style = {styles.headerText}>Personal Information</Text>
                    </TouchableOpacity>

                    {shouldshow ? (
                        <View >
                            <View style = {styles.inputView}>
                                <TextInput 
                                    style = {styles.inputText}
                                    placeholder = "First Name"
                                    placeholderTextColor="#003f5c"
                                    />
                            </View>
                            <View style = {styles.inputView}>
                                <TextInput 
                                    style = {styles.inputText}
                                    placeholder = "Last Name"
                                    placeholderTextColor="#003f5c"
                                    />
                            </View>
                            <View style = {styles.inputView}>
                            <TextInput 
                                style = {styles.inputText}
                                placeholder = "Email Address"
                                placeholderTextColor="#003f5c"
                                />
                            </View>
                            <View style = {styles.inputView}>
                                <TextInput 
                                    style = {styles.inputText}
                                    placeholder = "Username"
                                    placeholderTextColor="#003f5c"
                                    />
                            </View>
                            <View style = {styles.inputView}>
                                <TextInput 
                                    style = {styles.inputText}
                                    placeholder = "Password"
                                    placeholderTextColor="#003f5c"
                                    />
                            </View>
                            <View>
                                <TouchableOpacity style={styles.SubmitBtn}>
                                    <Text style={styles.SubmitText}>Save Changes</Text> 
                                </TouchableOpacity> 
                            </View>

                        </View>
                    ) : null } 
                    <TouchableOpacity onPress={() => setIsShowing(!isShowing)}> 
                        <Text style = {styles.headerText}>Accessibility</Text>
                    </TouchableOpacity>

                    {isShowing ? (
                        <View >
                            <View>
                                <Text>Dark Mode</Text>
                                <Switch
                                    value = {isOn}
                                    onValueChange = {onToggleSwitch}
                                    trackColor ={{false:'black', true:'white'}}
                                    thumbColor = {isOn ? "black": "white"}
                                />
                            </View>
                        </View>
                    ) :null } 
                        <View>
                            <TouchableOpacity
                                onPress={() => Alert.alert(
                                    'Delete Account ?!?',
                                    'Are you sure you want to delete your account?',
                                    [
                                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                                        {text: 'Confirm', onPress: setDeleteAcct(true) },
                                    ],
                                    { cancelable: false }
                                )}>
                                <Text style = {styles.deleteText}>Delete Account ?</Text>
                            </TouchableOpacity>
                        </View>
                    {/* <View style = {{flexDirection: 'row', justifyContent:'space-evenly'}} > */}
                    {/* <TouchableOpacity >
                        <View style = {styles.button}>
                            <Text style = {styles.button_label}>Sign out</Text>           
                        </View>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity >
                        <View style = {styles.button}>
                            <Text style = {styles.button_Delete}>Delete Account</Text>           
                        </View>
                    </TouchableOpacity> */}
                    {/* </View> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Alert, ScrollView, SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native';
import styles from './style';
import { useFonts } from 'expo-font';
import { useDispatch } from 'react-redux';
import { setDeleteAcct } from '../../../../actions/index';

export default function SettingsScreen ({navigation}){
    const [loaded] = useFonts({
        PTSansNarrow: require('../../../../assets/fonts/PTSansNarrow-Bold.ttf'),
        PTSansNarrowThin: require('../../../../assets/fonts/PTSansNarrow-Regular.ttf'),
    });


    const [shouldshow, setshouldShow] = useState(false);
    //const [darkMode, setDarkMode] = useState(false);
    const [isShowing, setIsShowing] = useState(false);

    const [isOn , setIsOn] = useState(false);
    const onToggleSwitch = () => setIsOn(!isOn);

    const dispatch = useDispatch();

    const handleDeleteAcct = () => {
      dispatch(setDeleteAcct())
    }

    const handleLogout = () => {
        handleDeleteAcct();
        // navigation.navigate("Login");
        // Alert.alert('Account has been deleted',
        // [ {text: 'Okay'} ],
        //   { cancelable: false })
    }

    while (!loaded) {
        return (
          <View style={style.activityIndicator}>
            <ActivityIndicator size={"large"}/>
          </View>
        )
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground style={styles.backgroundImg} source={require('../../../../assets/background.jpg')}>
                    <View style = {styles.container}>
                        <View>
                            <Text style = {{...styles.title, fontFamily: "PTSansNarrow"}}>Settings</Text>
                            <TouchableOpacity onPress={() => setshouldShow(!shouldshow)}> 
                                <Text style = {{...styles.headerText, fontFamily: 'PTSansNarrowThin'}}>Update User Information</Text>
                            </TouchableOpacity>

                            {shouldshow ? (
                                <View>
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
                                <Text style = {{...styles.headerText, fontFamily: 'PTSansNarrowThin'}}>Accessibility</Text>
                            </TouchableOpacity>

                            {isShowing ? (
                                <View>
                                    <View style={styles.accessibilityContainer}>
                                        <Text style={styles.darkModeText}>Dark Mode</Text>
                                        <Switch
                                            value = {isOn}
                                            onValueChange = {onToggleSwitch}
                                            trackColor ={{false:'black', true:'white'}}
                                            thumbColor = {isOn ? "black": "white"}
                                        />
                                    </View>
                                </View>
                            ) :null } 
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => Alert.alert(
                                    'Delete Account?',
                                    'Are you sure you want to delete your account?',
                                    [
                                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                                        {text: 'Confirm', onPress: () => handleLogout() },
                                    ],
                                    { cancelable: false }
                                )}>
                                <Text style = {styles.deleteText}>Delete Account?</Text>
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
            </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}
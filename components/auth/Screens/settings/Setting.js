import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Alert, ScrollView, SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native';
import styles from './style';
import { useDispatch } from 'react-redux';
import { setDeleteAcct } from '../../../../actions/index';
import { Header, InputBox, AppButton, Title } from '../../lib';

export default function SettingsScreen ({navigation}){


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
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground style={styles.backgroundImg} source={require('../../../../assets/background.jpg')}>
                    <View style = {styles.container}>
                        <View>
                            <Title fontFamily="PTSansNarrow" color='white' fontSize={40}>Settings</Title>
                            <TouchableOpacity onPress={() => setshouldShow(!shouldshow)}> 
                                <Header textAlign={'left'}>Update User Information</Header>
                            </TouchableOpacity>
                            {shouldshow ? (
                                <View>
                                    <InputBox
                                        placeholder = "First Name"
                                    />
                                    <InputBox
                                        placeholder = "Last Name"
                                    />
                                    <InputBox
                                        placeholder = "Email Address"
                                        keyboardType={"email-address"}
                                    />
                                    <InputBox
                                        placeholder = "Username"
                                    />
                                    <InputBox
                                        placeholder = "Password"
                                        secureTextEntry={true}
                                    />
                                    <AppButton>Save Changes</AppButton>
                                </View>
                            ) : null } 
                            <TouchableOpacity onPress={() => setIsShowing(!isShowing)}> 
                                <Header textAlign={'left'}>Accessibility</Header>
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
                </View>
            </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}
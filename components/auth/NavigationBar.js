import * as React from 'react';
import { View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './MainScreen';
import SettingsScreen from './Setting';
import ProfileScreen from './Profile';
import { color } from 'react-native-reanimated';

// Screen names
const homeName = 'Home';;
const detailName = 'List';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator initialRouteName={homeName} screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn == homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (rn == settingsName){
                        iconName = focused ? 'settings' : 'settings-outline'
                    }
                    else if (rn == detailName){
                        iconName = focused ? 'list' : 'list-outline'
                    }

                    return <Ionicons name = {iconName} size = {size} color={color}/>
                },
            })}>

              
                <Tab.Screen name = {detailName} component={ProfileScreen}/>
                <Tab.Screen name = {homeName} component={HomeScreen} />
                <Tab.Screen name = {settingsName} component={SettingsScreen}/>

               </Tab.Navigator>
        </NavigationContainer>
    )
    
}
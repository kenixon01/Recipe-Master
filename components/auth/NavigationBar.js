import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './Screens/MainScreen';
import SettingsScreen from './Screens/Setting';
import ListScreen from './Screens/ListEditor';
import Results from './Screens/Results';
import Login from './Screens/Login';

const Stack = createStackNavigator()

function HomeStackScreen (){
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Home' component={HomeScreen} />
        </Stack.Navigator>
    )
}

function SettingStackScreen (){
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Settings' component={SettingsScreen} />
            <Stack.Screen name = 'Login' component={Login}/>
        </Stack.Navigator>
    )
}

function ListEditorStackScreen (){
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'ListEditor' component={ListScreen} />
            <Stack.Screen name = 'Result' component={Results} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator initialRouteName={'Home '} screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === 'Home '){
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (rn === 'Setting'){
                        iconName = focused ? 'settings' : 'settings-outline'
                    }
                    else if (rn === 'List Editor'){
                        iconName = focused ? 'list' : 'list-outline'
                    }
                    else if (rn === 'Result'){
                        iconName = focused ? 'restaurant' : 'restaurant-outline'
                    }
                    

                    return (<Ionicons name = {iconName} size = {size} color={color}/>);
                },
            })}
            // tabBarOptions = {{
            //     activeTintColor: 'lightseagreen',
            //     inactiveTintColor: 'grey',
            //     lableStyle: {fontSize: 16},
                
            // }}
            >

              
                <Tab.Screen name = 'List Editor' component={ListEditorStackScreen} options={{headerShown: false}}/>
                <Tab.Screen name = 'Home ' component={HomeStackScreen} options={{headerShown: false}}/>
                <Tab.Screen name = 'Setting' component={SettingStackScreen} options={{headerShown: false}}/>
                

               </Tab.Navigator>
        </NavigationContainer>
    )
    
}
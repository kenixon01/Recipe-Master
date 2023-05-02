import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import App from '../../../App';
import { setDeleteAcct } from '../../../actions/index';


//Screens
import HomeScreen from '../Screens/main/MainScreen';
import SettingsScreen from '../Screens/settings/Setting';
import ListScreen from '../Screens/listEditor/ListEditor';
import Results from '../Screens/results/Results';
import { useEffect } from 'react';

const Stack = createStackNavigator()

function HomeStackScreen (){
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'HomePage' component={HomeScreen}  options= {{headerShown: false}}/>
            <Stack.Screen name = 'Result' component={Results}  options= {{headerShown: false}}/>
        </Stack.Navigator>
    )
}

function SettingStackScreen (){
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Setting' component={SettingsScreen}  options= {{headerShown: false}}/>
        </Stack.Navigator>
    )
}

function ListEditorStackScreen (){
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'ListEditor' component={ListScreen}  options= {{headerShown: false}}/>
            <Stack.Screen name = 'Result' component={Results}  options= {{headerShown: false}}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
export default function NavigationBar() {
    const dispatch = useDispatch();
  
    const handleDeleteAcct = () => {
      dispatch(setDeleteAcct())
    }

    const data = useSelector((store) => store.deleted);
    
    useEffect(() => {
        handleDeleteAcct()
        console.log(data )
    }, [])

    if(data)  {
        return <App/>
    }

    return(        
        <NavigationContainer independent={true}>
            <Tab.Navigator initialRouteName={'Home'} screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === 'Home'){
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (rn === 'Settings'){
                        iconName = focused ? 'settings' : 'settings-outline'
                    }
                    else if (rn === 'List Editor'){
                        iconName = focused ? 'list' : 'list-outline'
                    }

                    return (<Ionicons name = {iconName} size = {size} color={color}/>);
                },
                tabBarActiveTintColor: '#4F5200',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: { fontSize: 12},
                tabBarStyle: { height: 60 },
                tabBarItemStyle: { margin: 5 }
            })}
            >
                <Tab.Screen name = 'List Editor' component={ListEditorStackScreen} options={{headerShown: false}}/>
                <Tab.Screen name = 'Home' component={HomeStackScreen} options={{headerShown: false}}/>
                <Stack.Screen name = 'Settings' component={SettingStackScreen} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer> 
    )    
}
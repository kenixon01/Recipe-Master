import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// imports Screens form components 
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import ForgotPasswordScreen from './components/auth/ForgotPassword';
import NavigationBar from './components/auth/NavigationBar';

const Stack = createStackNavigator();

const Auth = () => {
  //Stack Nav for Login and Sign up from Splash 
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name = "Login" component = {LoginScreen} options= {{headerShown: false}}/>
      <Stack.Screen name = "Register" component = {RegisterScreen} options= {{headerShown: false}}/>
      <Stack.Screen name = "ForgotPassword" component = {ForgotPasswordScreen}/>
    </Stack.Navigator>
  )
} 

const App = () => {
  return(  
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Auth">
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}}/>
        {/* Creates and establishes Home screen along with bottom navigation */}
        <Stack.Screen name = "Main" component={NavigationBar} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

import * as React from 'react';
import { StyleSheet} from 'react-native';
//import { AppRegistry } from 'react-native';
//import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// imports Screens form components 
import RegisterScreen from './screens/Register';
import LoginScreen from './screens/Login';
import ForgotPasswordScreen from './screens/ForgotPassword';
import NavigationBar from './navigation/NavigationBar';
import { ApolloProvider } from '@apollo/client';
import clients from './apollo';

export default function App() {
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
  
  return (  
    <ApolloProvider client={clients}>
     <NavigationContainer independent={true}>
       <Stack.Navigator initialRouteName="Auth">
         {/* Auth Navigator: Include Login and Signup */}
         <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}}/>
         {/* Creates and establishes Home screen along with bottom navigation */}
         <Stack.Screen name = "Main" component={NavigationBar} options = {{headerShown: false}} />
       </Stack.Navigator>
     </NavigationContainer>
     </ApolloProvider>
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

//export default App;
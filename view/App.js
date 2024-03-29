import * as React from 'react';
import { Provider } from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// imports Screens form components 
import RegisterScreen from './components/auth/Screens/register/Register';
import LoginScreen from './components/auth/Screens/login/Login';
import ForgotPasswordScreen from './components/auth/Screens/forgotPassword/ForgotPassword';
import NavigationBar from './components/auth/nav/NavigationBar';
import ResetPasswordScreen from "./components/auth/Screens/resetPassword/ResetPassword"
import VerifyCodeScreen from "./components/auth/Screens/codeEntry/VerifyCode"
import { store } from './redux/store'
import { ApolloProvider } from '@apollo/client';
import clients from './Apollo';

const Stack = createStackNavigator();


export const Auth = () => {
  //Stack Nav for Login and Sign up from Splash 
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name = "Login" component = {LoginScreen} options= {{headerShown: false}}/>
      <Stack.Screen name = "Register" component = {RegisterScreen} options= {{headerShown: false}}/>
      <Stack.Screen name = "ForgotPassword" component = {ForgotPasswordScreen} options= {{headerShown: false}}/>
      <Stack.Screen name = "ResetPassword" component = {ResetPasswordScreen} options= {{headerShown: false}}/>
      <Stack.Screen name = "CodeEntry" component = {VerifyCodeScreen} options= {{headerShown: false}}/>
    </Stack.Navigator>
  )
} 

const App = () => {
  
  return(  
    <ApolloProvider client={clients}>
      <Provider store = {store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Auth" screenOptions={{headerShown: false}}>
          {/* Auth Navigator: Include Login and Signup */}
          <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}}/>
          {/* Creates and establishes Home screen along with bottom navigation */}
          <Stack.Screen name = "Main" component={NavigationBar} options = {{headerShown: false}} />
        
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  )
}

export default App;

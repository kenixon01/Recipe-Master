
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NavigationBar from './components/auth/NavigationBar';


// imports Screens form components 
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import ForgotPasswordScreen from './components/auth/ForgotPassword';
import MainScreen from './components/auth/MainScreen';
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
        <Stack.Screen name = "Main" component={MainScreen} options = {{headerShown: false}} />
        
      </Stack.Navigator>
      <NavigationBar independent={true}/>
    </NavigationContainer>
    
  )
}



// export default function App() {
//   return (
//     <NavigationContainer independent = {true}>
//       <Stack.Navigator initialRouteName = "Home">
//         <Stack.Screen name = "Home" component = {LandingScreen} options= {{headerShown: false}}/>
//         <Stack.Screen name = "Register" component = {RegisterScreen}/>
//         <Stack.Screen name = "Login" component = {LoginScreen}/>
//         <Stack.Screen name = "ForgotPassword" component = {ForgotPasswordScreen}/>
       
//       </Stack.Navigator>
//     </NavigationContainer>
    
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


// imports Screens form components 
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import MainPage from './components/auth/MainScreen';
import ForgotPasswordScreen from './components/auth/ForgotPassword';

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen name="SplashScreen" component={LandingScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        {/* <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
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

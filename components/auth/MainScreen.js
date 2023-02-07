import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// export class MainScreen extends Component {


//   render(){
//     <View>
//       <Text>Hello</Text>
//     </View>
//   }
// }

// export default function MainScreen () {

// function HomeScreen () {
//   return (
//     <View style = {styles.HomeTab}>
//       <Text>Home!</Text>
//     </View>
//   )
// }

// function SettingsScreen () {
//   return (
//     <View style = {styles.SettingsTab}>
//       <Text>Settings!</Text>
//     </View>
//   )
// }

// const Tab = createBottomTabNavigator();

//   return (
//     <View>
//       <Text>Hello </Text>
//     <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//       </View>
//   );

// }

const styles = StyleSheet.create({
  HomeTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SettingsTab:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});



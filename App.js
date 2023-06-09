/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import TabNavigator from './TabNavigator/TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AppBar from './src/component/appbar/AppBar';


const Stack=createNativeStackNavigator()

function App() {
 
 

  return (
 <NavigationContainer>
  <AppBar title="My To Do App"/>
<Stack.Navigator>

  <Stack.Screen name='Main' component={TabNavigator} options={{ headerShown: false }} />
</Stack.Navigator>
 </NavigationContainer>
  );
}

const styles = StyleSheet.create({


});

export default App;

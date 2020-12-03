import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//Stack navigation, status bar will only appear with this version
import { createStackNavigator } from '@react-navigation/stack';
//Tabs navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Drawer
import { createDrawerNavigator } from '@react-navigation/drawer';

import {HomeScreen} from './screens/Home.js';
import {SecondScreen} from './screens/Profile.js';

const Stack = createStackNavigator();

//const Stack =createDrawerNavigator();

const App: () => React$Node = () => {
  return (
    <>
    <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Welcome' }}
    />
    <Stack.Screen
      name="Profile"
      component={SecondScreen}
    />

  </Stack.Navigator>
</NavigationContainer>

</>
  );
};


export default App;

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
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  const obj = {
    name:'John',
    title:'Lord'
  }
  //StatusBar is rendered ony for Stack navigation
  return (
    <SafeAreaView>
    <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1"/>
    <Button title="Menu" onPress={()=>{navigation.toggleDrawer();}} />
    <Text>Welcome Home</Text>
    <Button title="Profile"
      onPress={()=>{
        navigation.navigate('Profile', {msg:'Hi there!', data:obj});
        }}
    />
    </SafeAreaView>

    );
};


export {HomeScreen};


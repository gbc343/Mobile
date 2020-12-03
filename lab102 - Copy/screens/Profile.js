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

const SecondScreen = ({route, navigation}) => {
  return (
    <SafeAreaView>
    <Text>Second screen</Text>
    <Button
      title="Back Home"
      onPress={()=>{
        navigation.goBack();
        }}
    />
    </SafeAreaView>

    );
};

export {SecondScreen};
 // <Text>Second screen{route.params.msg}</Text>
      //<Text>Name: {route.params.data.name}</Text>
import React, {Component, useState} from 'react';
import { Text, View, Image, ScrollView, SafeAreaView, TextInput, Button, StyleSheet,
Platform } from 'react-native';





export default class HelloWorldApp extends Component{

  render(){
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>Hello, world!</Text>
        <Text style={{color:'red'}}>COMP3074 - React native</Text>
      </View>
    );
  }

}

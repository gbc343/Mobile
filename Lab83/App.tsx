import React, {Component, useState} from 'react';
import { Text, View, Image, ScrollView, SafeAreaView, TextInput, Button, StyleSheet,
Platform } from 'react-native';


const styles = StyleSheet.create(
  {
    studentImage: {
      width: 200,
      height: 200
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    headerColor:{
      ...Platform.select({
        ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
    }
  }
);


function Student(props){
  return(
    <View>
    <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={styles.studentImage}
      />
    <Text>
      <Text>I am a Student! </Text>
      <Text>My name is {props.name}!</Text>
    </Text>
    </View>
  );
}


export default function HelloWorldApp() {

  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.headerColor}>Hello, world!</Text>
      <Text>{Platform.OS}</Text>
      <Text style={{color:'red'}}>COMP3074 - React native</Text>

      <TextInput placeholder="Type something here!"
      style={{borderColor: 'gray', borderWidth: 1, width:200}}
      onChangeText={text=>onChangeText(text)}
      clearTextOnFocus //this flag work only on iOS
      value={text}
      />

      <Button title="Clear" onPress={()=>{onChangeText('')}} color="#C0C0C0" />
      <Student name={text}/>
      <Student name="Aria Stark"/>
      <Student name="Luke Skywalker"/>
    </View>
    </ScrollView>
    </SafeAreaView>
  );}

//function Student(props){
  
/*
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
*/

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, {Component, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Image,
  Input,
  Text,
  Button,
  Switch,
  StatusBar,
  Platform
} from 'react-native';

const NavComponent = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <NavComponent.Navigator>
          <NavComponent.Screen
            name="Home"
            component={MainScreen}
            options={{title:'Welcome'}}
          />
          <NavComponent.Screen
            name="Profile"
            component={AboutScreen}

          />
        </NavComponent.Navigator>
      </NavigationContainer>

    </>
  );
};





const AboutScreen = ()=>{
  return(
    <View>
    <Text>Gordon Wells</Text>
    <Text>100708985</Text>
    </View>
    );
};







function MainScreen({navigation}) {

  


  const [text, onChangeText] = React.useState('');


  const [size, setSize] = React.useState(0);
  const [unitFloor, setUnit] = React.useState(0);
  const [unitInstallation, setUnitInstall] = React.useState(0);
  const [flooring, setFlooring] = React.useState(0);
  const [installation, setInstallation] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [tax, setTax] = React.useState(0);


  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView>
    <View style={styles.container}>
      <Text>{Platform.OS}</Text>
      <Text style={{color:'red'}}>COMP3074 - React native - Assignment 2</Text>

      <TextInput placeholder="size of room in square feet or meters"
      style={{borderColor: 'gray', borderWidth: 1, width:250}}
      onChangeText={size=>setSize(size)}
      clearTextOnFocus //this flag work only on iOS
      value={size}
      keyboardType="numeric"
      />
        <Text>{isEnabled ? 'feet' :'meters'}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <TextInput placeholder="flooring per square feet or meters"
      style={{borderColor: 'gray', borderWidth: 1, width:250}}
      onChangeText={unitFloor=>setUnit(unitFloor)}
      clearTextOnFocus //this flag work only on iOS
      value={unitFloor}
      keyboardType="numeric"
      />
      <TextInput placeholder="Installation per sqaure feet or meters"
      style={{borderColor: 'gray', borderWidth: 1, width:250}}
      onChangeText={unitInstallation=>setUnitInstall(unitInstallation)}
      clearTextOnFocus //this flag work only on iOS
      value={unitInstallation}
      keyboardType="numeric"
      />

    

    <Button title="Installation and Flooring"
     onPress={()=>{setFlooring(size * unitFloor)
      setInstallation(size * unitInstallation)}}/>
      <Text>Flooring costs: ${flooring} for total square {isEnabled ? 'feet' :'meters'}</Text>
      <Text>Installation Costs: ${installation} for total square {isEnabled ? 'feet' :'meters'}</Text>

<Button title="Total Cost"
     onPress={()=>{
      setTotal(flooring + installation)
   }}/>
      <Text>Total Cost: ${total}</Text>
      
      <Button title="Calculate Tax"
      onPress={()=>{
       setTax(total * 0.13)}}/>
       <Text>total tax: ${tax}</Text>

      <Button title="Clear" onPress={()=>{setSize(0); setUnit(0); setUnitInstall(0)}} color="#C0C0C0" />
      <Text>{text}</Text>
      <Button title="Go to Profile"
     onPress={()=>{navigation.navigate('Profile');}}/>

    </View>
    </ScrollView>
    </SafeAreaView>
  );}

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
  



export default App;

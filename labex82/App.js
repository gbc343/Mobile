import React, { useState, useEffect } from "react";
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet,
  Text, TouchableOpacity, ActivityIndicator, Image } from "react-native";



const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Image source={{uri:item.url}} style={{height:50, width:50, padding:5}} />
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((json)=>setData(json))
    .then((error) => {console.error(eror);})
    .finally(()=>setIsLoading(false));

    }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id); alert(item.body);}}
        style={{ backgroundColor }}
      />
    );
  };

  return (

    <SafeAreaView style={styles.container}>
    {isLoading ? <Text>Loading</Text> :
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex:1,
    flexDirection:'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;

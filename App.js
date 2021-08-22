import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet,Image, Text, View, Button, Alert } from 'react-native';
import DisplayImage from './components/DisplayImage'


export default function App() {
  const [hasData, setHasData] = useState("");
  
const url = "https://rickandmortyapi.com/api/character/?page=1"

useEffect( ()=>{
  async function fetchData(){
    const response =  await fetch(url);
    const data = await response.json();
    setHasData(data.results)
    
    
  } 
  
  fetchData();
 
},[])
if(hasData !=""){
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(hasData[0].name)}</Text>  
     <DisplayImage image={hasData[0].image}/>
      {/* <Text>{JSON.stringify(hasData[0].image)}</Text>  */}
      <Button
        title="Press me"
        onPress={() => {
          Alert.alert('Simple Button pressed')
          
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}else{
return (
    <View style={styles.container}>
      <Text>"test"</Text>  
     <DisplayImage image={'https://rickandmortyapi.com/api/character/avatar/665.jpeg'}/>
      <Text>"test"</Text> 

      <StatusBar style="auto" />
    </View>
  );
}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHolder:{
    width: 100,
    height: 100
  },
  image: {
    width: 80,
    height: 80
  }
});

const DisplayAnImage = () => {
  return (
    <View style={styles.imageHolder}>
      <Image 
        style={styles.image}
        source={{uri:hasData[0].url}}
        />
    </View>
  )
}
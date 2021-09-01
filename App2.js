import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import DisplayImage from './components/DisplayImage'
import { useSelector } from 'react-redux';
import CounterRedux from './features/CounterRedux';
import Header from './components/Header'

export default function App2() {
  const [hasData, setHasData] = useState("");
  const value = useSelector(state => state.addImage.value)
  
const url = "https://rickandmortyapi.com/api/character/?page="


useEffect( ()=>{
  async function fetchData(){
   
      const response =  await fetch(url+String(value));
    
    
    const data = await response.json();
    
    setHasData(data.results)
  } 
  fetchData();
 
},[])

const getNextPage = () => {
  if (page < 34){
    setPage((page) => {return page +1})
    fetchData()
  }
}

if(hasData !=""){
  
  const pressHandler = (id) => {
    setHasData((prevHasData) => {
      return prevHasData.filter(item => item.id != id)
    })
  }
  return (
  
      <View>
        <Header/>
        <View style={styles.container}>
            <View style={styles.flatList}>
            <FlatList 
                data={hasData}
                numColumns={7}
                renderItem={({ item }) => (
                <DisplayImage item={item} pressHandler={pressHandler}/>
                )}
            />
            </View>
     
            <Button
            title="Get more persons " 
            onPress={() => {getNextPage
            }}
            />
            <CounterRedux />
        </View>
      </View>
    
  
   
  );
}else{
return (
    <View>
        <Header/>
        <View style={styles.container}>
            <Text>"test"</Text>  
            <Text>"test"</Text> 
            <StatusBar style="auto" />
        </View>
    </View>
  );
}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  flatList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
    
  }
});


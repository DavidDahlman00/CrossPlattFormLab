import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import DisplayImage from './components/DisplayImage'
import { useDispatch, useSelector } from 'react-redux';
import CounterRedux from './features/CounterRedux';
import Header from './components/Header'
import { actions } from "./features/addImages";

export default function App2() {
  const dispatch = useDispatch();
  const getMore = () => {
    dispatch(actions.success("test", 1))
    ;}
  const [hasData, setHasData] = useState("");
  const value = useSelector(state => state.addImage.value)
  const myImageList = useSelector(state => state.addImage.imageList)



  
const url = "https://rickandmortyapi.com/api/character/?page="

async function fetchMore(dispatch) {
  //dispatch(actions.isFetching())
  try {
      let response = await fetch(url+String(value))
      let data = await response.json()
      console.log('Got data: ', data )
      dispatch(actions.success(data.results, value + 1))
  } catch {
      dispatch(actions.failure())
  }
}

useEffect( ()=>{
  async function fetchData(){
   
      const response =  await fetch(url+String(value));
    
    
    const data = await response.json();
    
    setHasData(data.results)
  } 
  fetchData([dispatch]);
 
},[])


if(hasData !=""){
  
  const pressHandler = (id) => {
    setHasData((prevHasData) => {
      return prevHasData.filter(item => item.id != id)
    })
  }
  return (
  
      <View>
        <Header/>
        <Text>{value}</Text>
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
            onPress={() => {
              //getMore()
              fetchMore
            console.log("button pressed", {value})
            console.log("button pressed", myImageList)
            }
            }
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


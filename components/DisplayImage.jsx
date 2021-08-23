import React, { useState } from "react";
import { StyleSheet,Image, Text, View } from 'react-native';
import { useSelector } from "react-redux"
const DisplayImage = (props) => {
    const value = useSelector(state => state.counter)
    return (    
      <View style={styles.imageHolder}>
        <Text>{value} {JSON.stringify(props.image[value].name)}</Text>
        <Image 
          style={styles.image}
          source={{uri:props.image[value].image}}
          />
      </View>
    )
  }

  const styles = StyleSheet.create({
    image: {
      alignItems: "center",
      justifyContent: "center",
      width: 100,
      height: 100,
      borderColor: "yellow"
      
    }
  });

  export default DisplayImage;
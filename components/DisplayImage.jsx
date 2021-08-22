import React, { useState } from "react";
import { StyleSheet,Image, Text, View } from 'react-native';

const DisplayImage = (props) => {
    return (
      <View style={styles.imageHolder}>
        <Image 
          style={styles.image}
          source={{uri:props.image}}
          />
      </View>
    )
  }

  const styles = StyleSheet.create({
    image: {
      width: 80,
      height: 80
    }
  });

  export default DisplayImage;
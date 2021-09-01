import React from "react";
import { StyleSheet,Image, View, TouchableOpacity } from 'react-native';
import Info from './Info'


const DisplayImage = ({item, pressHandler }) => {
    
    return (   
      <TouchableOpacity onPress={()=>pressHandler(item.id)}>
        <View style={styles.box}>
          <Image 
            style={styles.image}
            source={{uri:item.image}}
            />
            <Info name={item.name} 
                  status={item.status}  
                  species={item.species} />
          
        </View>
      </TouchableOpacity> 
    )
  }

  const styles = StyleSheet.create({
    box: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: 110,
      height: 140,
      
     
    },
    image: {
      alignItems: "center",
      justifyContent: "center",
      width: 80,
      height: 80,
      borderColor: "yellow",
    },
    text: {
      color: '#333',
    }
  });

  export default DisplayImage;
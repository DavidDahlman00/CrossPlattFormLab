import React from 'react';
import { StyleSheet, Text, View} from 'react-native';



const Info = (props)=>{
    return(
        <View style={styles.box}>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.text}>{props.status}</Text>
            <Text style={styles.text}>{props.species}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1, 
        height: 60,
        

    },
    text: {
      color: 'darkgray',
      fontSize: 12
    }
  });
export default Info

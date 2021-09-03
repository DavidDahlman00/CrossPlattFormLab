import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';

export default function Header() {
    const value = useSelector(state => state.counter)
    const myImageList = useSelector(state => state.addImage.value)
    console.log("header value", {value})
    console.log("header list", {myImageList})
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Lab (test): Button count = {value}</Text>
            <Text style={styles.title}>{myImageList}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'green',
        marginBottom: 20
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
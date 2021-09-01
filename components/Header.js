import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';

export default function Header() {
    const value = useSelector(state => state.counter)
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Lab: Button count = {value}</Text>
            
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
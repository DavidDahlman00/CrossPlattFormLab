import { useDispatch, useSelector } from "react-redux"
import { actions } from "./counter";
import React from 'react';
import {Text, View, Button } from 'react-native';


const CounterRedux = () => {

    const value = useSelector(state => state.counter)
    const dispatch = useDispatch();

    const increase = () => dispatch(actions.increase());
    const decrease = () => dispatch(actions.decrease());


    return (
        <View>
            <Button title= "increase" onPress={increase}>increase</Button>
            <Button title= "decrease" onPress={decrease}>decrease</Button>
        </View>
    )
}

export default CounterRedux;
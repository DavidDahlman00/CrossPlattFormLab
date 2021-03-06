import { createAction, createReducer } from "@reduxjs/toolkit";

const increase = createAction('increase counter');
const decrease = createAction('decrease counter');

const actions = {increase, decrease};


const initialstate = 1;

const reducer = createReducer(initialstate, {
    [increase] : (state, action) => {if(state < 34)
        {return state + 1}
    else
    {return state}},
    [decrease] : (state, action) => {if(state > 0)
        {return state - 1}
    else{return state}}
})

export { actions, reducer};
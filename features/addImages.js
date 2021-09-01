import { createAction, createReducer } from "@reduxjs/toolkit";
const getImages = createAction('get next page of images');


const actions = {getImages};


const initialstate = {
    imageList: "",
    value: 1
};

async function fetchData(value){
    const url = "https://rickandmortyapi.com/api/character/?page="
    const response =  await fetch(url+String(value));
    const data = await response.json();
    return(data.results)
} 

const reducer = createReducer(initialstate, {
    [getImages] : (state, action) => {if(state < 34){
        const newList = fetchData(state.value)

        return({imageList: [...state.imageList, newList], value: state.value +1 })
    }
        
    else
    {return state}}
    
})

export { actions, reducer};
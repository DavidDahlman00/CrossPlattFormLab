import { createAction, createReducer } from "@reduxjs/toolkit";


const isFetching = createAction('is fetching')
const success = createAction('success')
const failure = createAction('failure')
const actions = {isFetching, success, failure}
const STATUS = {
    NORMAL: 'normal',
    FETCHING: 'is fetching',
    SUCCESS: 'success',
    FAILURE: 'failure'
}

const initialstate = {
    status: STATUS.NORMAL,
    imageList: fetchData(1),
    value: 4
};

async function fetchData(value){
    const url = "https://rickandmortyapi.com/api/character/?page="
    const response =  await fetch(url+String(value));
    const data = await response.json();
    return(data.results)
} 

const reducer = createReducer(initialstate, {
    [isFetching]: (state, action) => ({
        ...state,
        status: STATUS.FETCHING
    }),
    [failure]: (state, action) => ({
        ...state,
        status: STATUS.FAILURE
    }),
    [success] : (state, action) => {if(state.value < 34){
//        const newList = fetchData(state.value)

        return({status: STATUS.SUCCESS,
             imageList: action.payload, 
             value: action.payload + 1})
    }
    
        
    else
    {return {state}}}
    
})

export { actions, reducer};


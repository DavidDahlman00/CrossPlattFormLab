import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './features/rootReducer';


import App2 from './App2'

export default function App() {

  const store = createStore(rootReducer);
  
  return(
    <Provider store={store}>
      <App2/>
    </Provider>
  )  
}




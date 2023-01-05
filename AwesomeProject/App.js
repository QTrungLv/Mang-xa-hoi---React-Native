
import React from 'react';

import { Provider } from 'react-redux'
import HomePage from './components/Homepage/HomePage.js';

import Navigation from './navigation/Navigation.js';
import store from './redux/store.js';



export default function App() {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
    
  )
}



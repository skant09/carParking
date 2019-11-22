import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store';
import Cars from './cars';
import ParkignControl from './parking';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
            Automated Parking Lot System
          </p>
        </header>
        <ParkignControl />
        <Cars />

      </div>
    </Provider>
  );
}

export default App;

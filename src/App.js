import logo from './logo.svg';
import './App.css';
import React from 'react';
import HoverCounter from './components/higherorderComponents/HoverCounter';
import ClickCounter from './components/higherorderComponents/ClickCounter';


function App() {

  return (

    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>

  );
}

export default App;

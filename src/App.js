import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ComponentA from './components/contexthook/ComponentA';
import React from 'react';
export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Praneshwar'}>
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
}

export default App;

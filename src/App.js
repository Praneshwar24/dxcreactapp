import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useReducer } from 'react';
import DataFetchingTwo from './components/useReducercases/DataFetchingTwo';


export const CountContext = React.createContext()
const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return initialState
    default: return state
  }
}
function App() {

  return (

    <div className="App">
      <DataFetchingTwo />
    </div>

  );
}

export default App;

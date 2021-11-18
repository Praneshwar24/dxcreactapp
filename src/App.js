import logo from './logo.svg';
import './App.css';
import DataFetching from './components/hooks/useeffect/DataFetching';
import axios from 'axios';








function App() {
  return (
    <div className="App">
      <DataFetching />
    </div>
  );
}

export default App;

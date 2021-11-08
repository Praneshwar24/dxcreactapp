import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Praneshwar" college="IIT">
        <p>this is children property</p>
      </Greet>
      <Greet name="Harish" college="TAG" />
      <Greet name="Roy" college="MIT" />

      <Welcome />
    </div>
  );
}

export default App;

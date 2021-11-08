import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">

      <Counter />

      <Message />
      <Greet name="Praneshwar" college="IIT">
        <p>this is children property</p>
      </Greet>
      <Greet name="Roy" college="MIT">
        <button>click me</button>
      </Greet>
      <Greet />

      <Welcome name="Abbishek" alias="Roy" />
    </div>
  );
}

export default App;

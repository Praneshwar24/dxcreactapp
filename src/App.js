import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList/>
      <UserGreeting/>
      <ParentComponent />
      <EventBind />


      {/*  <ClassClick />

      <FunctionClick />

      <Counter />

      <Message />
      <Greet name="Praneshwar" college="IIT">
        <p>this is children property</p>
      </Greet>
      <Greet name="Roy" college="MIT">
        <button>click me</button>
      </Greet>
      <Greet />

      <Welcome name="Abbishek" alias="Roy" /> */}
    </div>
  );
}

export default App;

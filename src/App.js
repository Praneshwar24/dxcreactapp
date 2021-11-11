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
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import Fragments from './components/Fragments';
import NewTable from './components/NewTable';
import Parentcomp from './components/Parentcomp';
import PureComp from './components/PureComp';

function App() {
  return (
    <div className="App">
      <Parentcomp />

    </div>
  );
}

export default App;

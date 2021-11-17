import logo from './logo.svg';
import './App.css';
import FrParentInput from './components/refs/FrParentInput';
import PortalDemo from './components/portals/PortalDemo';
import HookCounter from './components/hooks/HookCounter';
import ClassCounter from './components/hooks/ClassCounter';
import HookCounter2 from './components/hooks/HookCounter2';




function App() {
  return (
    <div className="App">
      {/* <FrParentInput /> */}
     {/*  <PortalDemo />
      <HookCounter /> */}
      <HookCounter2/>
    </div>
  );
}

export default App;


import onair from './pics/onair.jpg';
import './App.css';
import Ses from "./Ses"
import {Button} from '@material-ui/core';
//import {PlayArrowOutlined} from '@material-ui/icons'
function App() {

  return (
    <div>
       
       <div class="bg-image">
       <img src={onair} className="img" alt="onair"/>
       </div>

        <div class="bg-text">
        <Button   className="button" />
        <Ses/>
      
        </div>
        
    </div>
  );
}

export default App;


/*import logo from './logo.svg';
import './App.css';


<header className="App-header">
       <img src={onair} className="img" alt="onair"/>
       <button>sadsad</button>
    <Radio></Radio>
      </header>


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
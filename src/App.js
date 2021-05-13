import onair from './pics/onair.jpg';
import './App.css';
import MultiPlayer from './MultiPlayer'
import Neyim from './songs/neyim.mp3'
import Galiba from './songs/galiba.mp3'
import Suspus from './songs/suspus.mp3'
import Golge from './songs/golge.mp3'
import Bende from './songs/bende.mp3'
import Holocaust from './songs/holo.mp3'
import Istakoz from './songs/istakoz.mp3'
import Sago from './pics/sago.jpg'
import Ceza from './pics/ceza.jpg'


function App() {

  return (
    <div>
       
       <div class="bg-image">
       <img src={onair} className="img" alt="onair"/>
       </div>

        <div class="bg-text">
        <div class="container">
          <div class="row">
           <div class="col">
              <img src={Sago} className="rapstar"></img>
            </div>
            
            <div class="col">
              <MultiPlayer urls={[Neyim,Galiba,Suspus,Golge,Bende,Holocaust,Istakoz,]}/>
            </div>
            <div class="col">
              <p>CEZA - Sagopa Kajmer | Neyim Var ki?</p>
              <p>Sagopa Kajmer | Galiba</p>
              <p>CEZA | Suspus</p>
              <p>Sagopa Kajmer | Gölge Haramileri</p>
              <p>Sagopa Kajmer | Bir Tek Bende Yok</p>
              <p>CEZA | Holocaust</p>
              <p>Sagopa Kajmer | Istakoz</p>
            </div>
            
            <div class="col">
              <img src={Ceza} className="rapstar"></img>
          </div>
        </div>
        </div> 
        

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
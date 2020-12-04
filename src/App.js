import logo from './logo.svg';
import './App.css';
import Tabs from "./components/Tabs"; 

function App() {
  return (
    <div>
      <h1> Virtual Machine Configuration</h1>
      <h2> Choose Image</h2>
      <Tabs> 
       <div label="Gator"> 
         See ya later, <em>Alligator</em>! 
       </div> 
       <div label="Croc"> 
         After 'while, <em>Crocodile</em>! 
       </div> 
       <div label="Sarcosuchus"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
     </Tabs> 
    </div>
  );
}

export default App;

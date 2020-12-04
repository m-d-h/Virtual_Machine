
import './App.css';
import Tabs from "./components/Tabs"; 

function App() {
  return (
    <div>
      <h1> Virtual Machine Configuration</h1>
      
      <select id = "Select Region">
          <option value="N/A">N/A</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
      </select>

      <Tabs> 
       <div label="Choose Image"> 
         See ya later, <em>Fill This</em>! 
       </div> 
       <div label="Choose Instance Type"> 
         After 'while, <em>Fill</em>! 
       </div> 
       <div label="Choose Storage and Network"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Configure Security"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Review and Launch"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
     </Tabs> 
    </div>
  );
}

export default App;


import './App.css';
import Tabs from "./components/Tabs"; 

function App() {
  return (
    <div>
      <h1> Virtual Machine Configuration</h1>
      
          <select id = "Select">
              <option value="N/A">Select Region</option>
              <option value="1">US - East 1</option>
              <option value="2">Asia Pacific Mumbai</option>
              <option value="3">US West</option>
            
          </select>

      <Tabs> 
       <div label="Choose Image"> 
         See ya later, 
           <em>
              <div>
                Linux 2 Image
              </div>
           </em>! 
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
       <div label="Review and Launch ....."> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
     </Tabs> 
    </div>
  );
}

export default App;

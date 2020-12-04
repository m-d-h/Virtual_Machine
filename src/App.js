
import './App.css';
import Tabs from "./components/Tabs"; 
//import StackGrid from "react-stack-grid";

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
           <em>
           <div>
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------
              
              </div>
              <div>

                <h1>Linux 2 Image</h1>
                <p>Linux 2 comes with 5 Years of Support. It Provides Linux Kernel 4.14 tuned for Optimal Performance</p>
                    <form>
                        <input type="radio" name="fruit" value="64-Bit (x86)" />64-Bit (x86)
                        <input type="radio" name="fruit" value="64-Bit (ARM)" />64-Bit (ARM)
                        <button type="submit"> Select
                        </button>
                    </form>
              </div>
              
              <div>
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------
              
              </div>
              <div>
                <h1>Ubuntu Server 18.04 LTS</h1>
                <p>Linux 2 comes with 5 Years of Support. It Provides Linux Kernel 4.14 tuned for Optimal Performance</p>
                    <form>
                        <input type="radio" name="fruit" value="64-Bit (x86)" />64-Bit (x86)
                        <input type="radio" name="fruit" value="64-Bit (ARM)" />64-Bit (ARM)
                        <button type="submit"> Select
                        </button>
                    </form>
              </div>
              <div>
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------
              
              </div>
              <div>
                <h1>Red Hat Enterprise Linux 8</h1>
                <p>Linux 2 comes with 5 Years of Support. It Provides Linux Kernel 4.14 tuned for Optimal Performance</p>

              </div>
              <div>
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------
              
              </div>
              <div>
                <h1>Microsoft Windows Server 2019 Base</h1>
                <p>Linux 2 comes with 5 Years of Support. It Provides Linux Kernel 4.14 tuned for Optimal Performance</p>
                    <form>
                        <input type="radio" name="fruit" value="64-Bit (x86)" />64-Bit (x86)
                        <input type="radio" name="fruit" value="64-Bit (ARM)" />64-Bit (ARM)
                        <button type="submit"> Select
                        </button>
                    </form>
              </div>
              <div>
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------
              
              </div>
              <div>
                <h1>SUSE Linux Enterprise Server</h1>
                <p>Linux 2 comes with 5 Years of Support. It Provides Linux Kernel 4.14 tuned for Optimal Performance</p>
                    <form>
                        <input type="radio" name="fruit" value="64-Bit (x86)" />64-Bit (x86)
                        <input type="radio" name="fruit" value="64-Bit (ARM)" />64-Bit (ARM)
                        <button type="submit"> Select
                        </button>
                    </form>
              </div>

              <div>
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------
              
              </div>

           </em>! 
       </div> 
       <div label="Choose Instance Type"> 
           <em>
           xxdd
          </em>! 
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

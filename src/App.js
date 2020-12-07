
import './App.css';
import Tabs from "./components/Tabs"; 
import React, { Component } from "react";

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
                      <button type="submit" onClick={() => window.alert("Linux 2 Image 64-Bit , New Estimated Cost : $ 243.6/month ")}  > Select
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
                        <button type="submit" onClick={() => window.alert("Ubuntu Server 18.04 LTS, 64-Bit , New Estimated Cost : $ 243.6/month ")}> Select
                        </button>
                    </form>
              </div>
              <div>
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------
              
              </div>
              <div>
                <h1>Red Hat Enterprise Linux 8</h1>
                <p>Linux 2 comes with 5 Years of Support. It Provides Linux Kernel 4.14 tuned for Optimal Performance</p>
                    <form>
                        <input type="radio" name="fruit" value="64-Bit (x86)" />64-Bit (x86)
                        <input type="radio" name="fruit" value="64-Bit (ARM)" />64-Bit (ARM)
                        <button type="submit" onClick={() => window.alert("Red Hat Enterprise Linux, 64-Bit , New Estimated Cost : $ 300/month ")}> Select
                        </button>
                    </form>
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
                        <button type="submit"  onClick={() => window.alert("Microsoft Windows Server 2019 Base, 64-Bit , New Estimated Cost : $ 338.6/month ")}> Select
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
                        <button type="submit" onClick={() => window.alert("SUSE Linux Enterprise Server, 64-Bit , New Estimated Cost : $ 200.22/month ")}> Select
                        </button>
                    </form>
              </div>

              <div>
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------
              
              </div>

           </em> 
       </div> 
       <div label="Choose Instance Type"> 
           <em>
            <Tabs> 
              <div label="General Purpose"> 
                <em>
                  <h2>Create Configuration</h2>
                  <select id = "Select">
                    <option value="CPU Cores">CPU Cores</option>
                    <option value="1">1 Core</option>
                    <option value="2">2 Core</option>
                    <option value="3">4 Core</option>
                    <option value="4">6 Core</option>
                    <option value="5">8 Core</option>
            
                  </select>

                  <select id = "Select">
                    <option value="CPU Cores">Memory</option>
                    <option value="1">256 MB</option>
                    <option value="2">512 MB</option>
                    <option value="3">1 GB</option>
                    <option value="4">4 GB</option>
                    <option value="5">8 GB</option>
            
                  </select>

                </em>
              </div> 
              <div label="CPU Optimised"> 
                <em>
                  <select id = "Select">
                      <option value="CPU Cores">CPU Cores</option>
                      <option value="1">1 Core</option>
                      <option value="2">2 Core</option>
                      <option value="3">4 Core</option>
                      <option value="4">6 Core</option>
                      <option value="5">8 Core</option>
              
                  </select>
                </em> 
              </div> 
              <div label="Storage Optimised"> 
                <em>

                  <select id = "Select">
                    <option value="CPU Memory">CPU Memory</option>
                    <option value="1">1 GB</option>
                    <option value="2">2 GB</option>
                    <option value="3">4 GB</option>
                    <option value="5">8 Core</option>
            
                  </select>

                </em> 
              </div> 
              <div label="Network Optimised"> 
                <em>
                <select id = "Select">
                    <option value="Network">Network</option>
                    <option value="1">1 GHz</option>
                    <option value="2">2 GHz</option>
                    <option value="3">4 GHz</option>
                    <option value="5">8 GHz</option>
            
                  </select>
                </em> 
              </div> 
          </Tabs> 
          </em> 
       </div> 
       <div label="Choose Storage and Network"> 
         <em>
            <div>
              <h3>Select Memory Type</h3>
                    <form>
                        <input type="radio" name="fruit" value="Magnetic Disc" />Magnetic Disc
                        <input type="radio" name="fruit" value="SSD" />SSD
                    </form>

                    
            </div>

            <div>
            <form>
                        <input type="radio" name="Mem" value="128 GB" />128 GB
                        <input type="radio" name="Mem" value="512 GB" />512 GB
                        <input type="radio" name="Mem" value="1 TB" />1 TB
                        <button type="submit" onClick={() => window.alert("Memory type and Storage added to Summary")}> Select
                        </button>
                    </form>
            </div>


         </em> 
       </div> 
       <div label="Configure Security"> 
          <em>
            <form>
              <input type="radio" name="fruit" value="Create a new Security Group" />Create a new Security Group
              <input type="radio" name="fruit" value="Select an Existing security Group" />Select an Existing security Group
            </form>
            
            <div>
              --------------------------------------------------------------------------------------------------------------------------------

            </div>
            <div>
              <h1>Select Security Group</h1>
            </div>
            <div>
              <select id = "Select">
                  <option value="Security Group">Security Group</option>
                  <option value="1">Security SG 1</option>
                  <option value="1">Security SG 2</option>
                  <option value="1">Security SG 3</option>
                  <option value="1">Security SX 27</option>
                  <option value="1">Security SL 12</option>
                  <option value="1">Group 29</option>
                  <option value="1">Security RT</option>
                  <option value="1">SGX 6</option>
                
              </select>
            </div>
          </em> 
       </div> 
       <div label="Review and Launch"> 
         <em>All the Accumulated Data Should Come Here</em>! 
       </div> 
     </Tabs> 
    </div>
  );
}

export default App;

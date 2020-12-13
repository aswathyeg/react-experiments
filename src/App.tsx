import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle'
import { render } from '@testing-library/react';
import ConditionalRendering from './ConditionalRendering';


function App() {
  
    return(
      <div className="App">
      <Welcome /> 
      <Clock />
      <br />
      <Toggle />
      <br />
      <ConditionalRendering />
      
     </div>
     
   );
    
  
  
  
}




export default App;

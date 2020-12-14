import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle'
import { render } from '@testing-library/react';
import ConditionalRendering from './ConditionalRendering';
import Calculator from './Calculator';


function App() {
  
    return(
      <div className="App">
      <Welcome /> 
      <Clock />
      <br />
      <Toggle />
      <br />
      <ConditionalRendering />
      <Calculator />
      
     </div>
     
   );
    
  
  
  
}




export default App;

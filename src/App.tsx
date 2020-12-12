import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle'
import { render } from '@testing-library/react';


function App() {
  
    return(
      <div className="App">
      <Welcome /> 
      <Clock />
      <br />
      <Toggle />
     </div>
     
   );
    
  
  
  
}




export default App;

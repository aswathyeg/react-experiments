import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import { render } from '@testing-library/react';


function App() {
  
    return(
      <div className="App">
      <Welcome /> 
      <Clock />
      
     </div>
     
   );
    
  
  
  
}




export default App;

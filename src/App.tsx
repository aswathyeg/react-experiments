import { Accordion } from '@material-ui/core';
import React from 'react';
import './App.css';
 import Login from './Login';
import SimpleAccordion from './SimpleAccordion';
import axios from 'axios';
interface IPost{
  userId: number;
    id?: number;
    title: string;
    body: string;
}
const defaultProps:IPost[]=[];
 function App() {
  
    return(
      <div className="App">      
        {/* <Login/>      */}
        <SimpleAccordion />
     </div>
     
   );
    
  }

export default App;

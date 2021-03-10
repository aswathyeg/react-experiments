import { Accordion } from '@material-ui/core';
import React from 'react';
import './App.css';
import Login from './Login';
import SimpleAccordion from './SimpleAccordion';
import axios from 'axios';
import PersistentDrawerLeft from './PersistentDrawerLeft';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <PersistentDrawerLeft />
      <BrowserRouter>

        

          <Route path="/simpleaccordion" component={SimpleAccordion} />
          
            </BrowserRouter>
          
    </div>
     
   );
    
  
    }
export default App;

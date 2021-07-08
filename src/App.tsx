import { Accordion } from '@material-ui/core';
import React from 'react';
import './App.css';
import Login from './Login';
import SimpleAccordion from './SimpleAccordion';
import axios from 'axios';
import PersistentDrawerLeft from './PersistentDrawerLeft';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Agestate from './AgeState';
import NumberDescriber from './NumberDescriber';
//import Hello from './Hello';

import BookList from './BookList'
import NoErrorBoundaries from './NoErrorBoundaries';
import IncrementDecrementClass from './IncrementDecrementClass';
import IncrementDecrementFunction from './IncrementDecrementFunction';
import ColorClass from './ColorClass';



function App() {


  return (
    <div className="App">

      
  <ColorClass />

    </div>
     
   );
    
  
    }
export default App;

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
import IncrementDecrement from './IncrementDecrement';


function App() {


  return (
    <div className="App">
      
  <IncrementDecrement />

    </div>
     
   );
    
  
    }
export default App;

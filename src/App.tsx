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
//import BookList from './BookList'
import FunctionComponent from './FunctionComponent';
import FunctionalComponent from './FunctionalComponent';
import StudentDetails from './ClassComponent';
 

function App() {


  return (
    <div className="App">
      <StudentDetails />
    </div>
     
   );
    
  
    }
export default App;

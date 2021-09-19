import React from 'react';
import Manatee from './Manatee/Manatee';
import './Landing.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Narwhal from './Narwhal/Narwhal';
import Whale from './Whale/Whale';
export default function Landing(){
    return(
        <div className="wrapper">
        <h1>Marine Mammals</h1>
        <BrowserRouter>
<Switch>

    <Route path="/"><Manatee /></Route>

    <Route path="/narwhal"><Narwhal /></Route>
    <Route path="/whale"><Whale /></Route>
</Switch>


        </BrowserRouter>
        
      </div>
    
    )
}
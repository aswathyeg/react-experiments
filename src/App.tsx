
// list and props example

import React from 'react';
import ClassLifecycle from './ClassLifecycle';
import UseEffectExample from './UseEffectExample';
import animals from './customize components with props/Data';
import AnimalCard from './customize components with props/AnimalCard';
import FormExample from './components/FormExample';
import Counting from './Counting';
import RiverInformation from './RiverInformation';
import KeyExample from './KeyExample';
import Keys from './Keys';
import Keyexample from './Keyexamples';
import KeyBlog from './KeyBlog';

import SideBar from './SiderBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Status from './Status';
import FirstTeam from './FirstTeam';
import SecondTeam from './SecondTeam';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={SideBar}></Route>
        </Switch>


        <Switch>
          <Route path='/status' component={Status}></Route>
        </Switch>
        <Switch>
          <Route path='/firstTeam' component={FirstTeam}></Route>
        </Switch>
        <Switch>
          <Route path='/secondTeam' component={SecondTeam}></Route>
        </Switch>

      </div>

    </BrowserRouter>

  )
}

export default App;
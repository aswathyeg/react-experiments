import React from 'react';
import PostExample from './api-example/PostExample';
import ChangeBackground from './ChangeBackground';
import ChartExample from './ChartExample';
import CodingPractice from './CodingPractice';
import Card from './components/Card/Card';
import FormExample from './components/FormExample';
import Building from './contextApI/Building';

import Home from './customHook/Home';
import Mounting from './Mounting';
import PersistentDrawerLeft from './PersistentDrawerLeft';
import SpreadOperator from './SpreadOperator';
import Table from './Table';
import BasicTabs from './Tabs';
import ContextExample from './useContext/ ContextExample';
import PropDrilling from './useContext/PropDrilling';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
function App() {
  return (
    <BrowserRouter>
    <div>
      < BasicTabs />
      <Switch>
      <Route path="/calculator" component={Calculator}/>
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
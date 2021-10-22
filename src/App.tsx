import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstTeam from './RoutingExample/FirstTeam';
import SecondTeam from './RoutingExample/SecondTeam';
import TeamSummary from './RoutingExample/TeamSummary';
import LandingSider from './RoutingExample/LandingSider';
import React, { useEffect ,useState} from 'react';
import BarChart from './api-example/BarChart'

import Chart from './components/Chart'

import ApiExample from './api-example/ApiExample';
import Table from './Table';


      
function App() {
    return (
    <div className="App">
    <Table/>
     </div>



  )
}

export default App;
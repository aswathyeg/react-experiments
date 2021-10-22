import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstTeam from './RoutingExample/FirstTeam';
import SecondTeam from './RoutingExample/SecondTeam';
import TeamSummary from './RoutingExample/TeamSummary';
import LandingSider from './RoutingExample/LandingSider';
import React, { useEffect ,useState} from 'react';
import BarChart from './api-example/BarChart'

import Chart from './components/Chart'
import DynamicChart from './DynamicChart';
import ApiExample from './api-example/ApiExample';


      
function App() {
    return (
    <div className="App">
    <BarChart/>
     </div>



  )
}

export default App;
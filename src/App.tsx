import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstTeam from './FirstTeam';
import SecondTeam from './SecondTeam';
import TeamSummary from './TeamSummary';
import LandingSider from './LandingSider';

function App() {

  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route exact path='/' component={LandingSider}></Route>


          <Route path='/teamSummary' component={TeamSummary}></Route>


          <Route path='/firstTeam' component={FirstTeam}></Route>


          <Route path='/secondTeam' component={SecondTeam}></Route>
        </Switch>

      </div>

    </BrowserRouter>



  )
}

export default App;
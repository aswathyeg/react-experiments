
// list and props example
import LastFloor from './Reducer/LastFloor';
import React from 'react';
import Provider from './contextApI/Provider';
import Building from './contextApI/Building';
import UserDetails from './UserApp/UserDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserList } from './UserApp/UserList';
import LoginHere from './LoginHere';
import AddMe from './Addme';
import AddMeClass from './AddMeClass';
import Addme from './Addme';
import PropsState from './PropsState';
import LiftStateUp from './LiftStateUp';
import ControlledUncontrolled from './Homee';
//import TemperatureInput from './Homee';
//import Home from './Homee';
import Homee from './Homee';
import Refs from './Refs';
import KeyExample from './KeyExample';
import Hello from './Hello';
import PropsContext from './Props';
import Props from './Props';
import ContextExample from './ContextExample';
import DetectHover from './HOCExample';
import IncrementDecrementFunction from './IncrementDecrementFunction';
import LifeCycleMethods from './LifeCycleMethods';
import Calculator from './Calculator';
import Calculators from './Calculators';
import Data from './customize components with props/Data';
import Product from  './components/product/product';

function App() {

  return (
  <div>
  <Product />
  </div>
  )
}

//const rootElement = document.getElementById("root");
export default App;
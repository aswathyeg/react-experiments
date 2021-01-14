import React from 'react';
import Home from './Home';
import Loginbutton from './Loginbutton';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const LoginbuttonRouting = () => {
  return (
    <Router>
      <Route exact path="/" component={Loginbutton} />
      <Route path="/home" component={Home} />

    </Router>
  );
}
export default LoginbuttonRouting;

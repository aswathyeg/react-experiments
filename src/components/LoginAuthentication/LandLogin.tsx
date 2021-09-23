import React, { useState } from 'react';
import './LandLogin.css'
import Dashboard from './Dashboard/Dashboard';
import Preferences from './Preferences/Prefenences';
import Login from './Login/Login';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

function setToken(userToken){
    sessionStorage.setItem('token', JSON.stringify(userToken));

}
function getToken(){
    const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
    
}

export default function LandLogin(){
    //const[token,setToken]=useState();

    const token=getToken()

    if(!token){
        return <Login setToken={setToken} />
    }

    return(
        <div className="wrapper">
            <h1>
                Applications
            </h1>
            <BrowserRouter>
<Switch>
    <Route path="/dashboard"><Dashboard/></Route>
    <Route path="/preferences"><Preferences/></Route>
    
</Switch>


            </BrowserRouter>
        </div>
    )
}
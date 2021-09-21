import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
export default function Login({setToken}){
    const[username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    return(
        <div >
            <h1 className="login-wrapper">
                Please Login
            </h1>
            <form className="login-wrapper">
            <input type="text" placeholder="UserName" onChange={e=>setUsername(e.target.value)}/>
            <br></br>
            <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
            <br></br>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
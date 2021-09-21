import React from 'react';
import './Login.css';
export default function Login(){
    return(
        <div >
            <h1 className="login-wrapper">
                Please Login
            </h1>
            <form className="login-wrapper">
            <input type="text" placeholder="UserName"/>
            <br></br>
            <input type="password" placeholder="password"/>
            <br></br>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
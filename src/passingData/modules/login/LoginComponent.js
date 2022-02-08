import React, { useState } from 'react';
import './login.css';


export default function LoginComponent (props){
    const [username,setUsername] = useState ("aeg@email.com");
    const [password,setPassword] = useState('');


   const handleUsername=(event)=>{
        setUsername(event.target.value);

    }

    const handlePassword=(event)=>{
        setPassword(event.target.value);

    }


   const handleClick=(event)=>{
    event.preventDefault();
    console.log(username,password);
        props.onSetUserInfo ({username,password});//passing data to parent (App)
       
    }

    return(
        <div className="outer">
            <div>
        <div>
            <form onSubmit={handleClick}>
                <div>
                    <label>Username</label>
            <input type="text"  onChange={handleUsername}/>
            </div>
        <br></br>
        <div>
        <label>Password</label>
            <input type="text"  onChange={handlePassword}/>
            </div>
            <br></br>
            <div className="outer">
            <button type="submit" value="Submit" >Submit</button>
            <br></br>
            </div>
            </form>
        </div>
        </div>
    
        </div>
    )
}
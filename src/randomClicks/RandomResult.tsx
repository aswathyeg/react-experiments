import React from 'react';
import './RandomResult.css'
export default function RandomResult(){
    return(
        <div className="heading">
            <div className="box">
            <input type="text" placeholder="Type Here">

            </input>
            </div>
            <button className="goButton" >Go</button>
        </div>
    )
}
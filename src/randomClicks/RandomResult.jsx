import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './RandomResult.css';

export default function RandomResult(){
    const[state,setState]=useState({
Joke:'',
searchWord:'',
searchUrl:'https://api.chucknorris.io/jokes/search?query='


    });
    useEffect(()=>{
         

       fetchData();

    },[])
    const fetchData=async()=>{
        try{
        const result=await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(result.data.value);
        setState({
            ...state,
            joke:result.data.value
        })
        }
        catch(error){
console.log(error)
        }

    }
    const goClick=()=>{

    }
    return(
        <div className="heading">
            <div className="box">
                <h1>Joke of the day</h1>
                <h3>{state.joke}</h3>
            <input type="text" placeholder="Type your sentence">

            </input>
            </div>
            <button className="goButton" onClick={goClick}>Go</button>
           
        </div>
    )
}
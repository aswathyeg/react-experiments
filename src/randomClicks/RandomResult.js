import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './RandomResult.css';

export default function RandomResult(){
    const[state,setState]=useState({
joke:'',
searchWord:'',
searchUrl:'https://api.chucknorris.io/jokes/search?query='


    });
    useEffect(()=>{
         

       fetchData();

    },[])
    const fetchData=async()=>{
        
        const result=await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(result.data.value);
        setState({
            ...state,
            joke:result.data.value
        })
        
       

    }
    const changeWord=(e)=>{
        console.log(e.target.value)
        setState({
            ...state,
            searchword:e.target.value
           
        })
        
    }
    const goClick=async()=>{
        console.log(state.searchWord);  
        if(state.searchWord==''){
            setState({
              ...state,
              joke:'Please enter a word'
            })
          }else{
          const result=await axios.get(state.searchUrl+state.searchWord)
          console.log(result.data.result)
          const jokeIndex=Math.floor(Math.random()*result.data.result.length);
          setState({
            ...state,
            joke:result.data.result[jokeIndex].value
          })
        }
    }
    
   
    return(
        <div className="heading">
            <div className="box">
                <h1>Joke of the day</h1>
                <h3>{state.joke}</h3>
            <input type="text" placeholder="Type a sentence for new joke" onChange={changeWord} />

            
            </div>
            <button className="goButton" onClick={goClick}>Go</button>
            <h3>{state.searchWord}</h3>
        </div>
    )
}

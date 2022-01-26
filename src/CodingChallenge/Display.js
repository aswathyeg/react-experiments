import React, { useState } from 'react';
export default function Display(){
    const [color,setColor]=useState("");
    
    const clickChange=(e)=>{
        setColor (e.target.value);

    }
    return(
        <div style={{alignItems:'center',justifyContent:"center"}}>
            
        <input type="text" placeholder="choose a color" onChange={clickChange}/>    
        </div>
    )
}
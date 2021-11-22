import React, { useState } from 'react';
export default function ChangeBackground(){
const[color,setColor]=useState("red");

const inputValue=(event)=>{
    setColor(event.target.value);

}

    return(
        <div>
 <input type="text" onChange={inputValue}/> 
<button style={{background:color}} onClick={()=>{setColor("blue")}}>Click</button>
        </div>
    )
}
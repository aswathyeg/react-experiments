import React, { useState } from 'react';
export default function Component1(){
    const[name,setName]=useState("John")
    return(
        <div>
            <h1>Hello {name}</h1>
            <Component2 name={name}/>
            </div>
    )
}

function Component2({name}){
    return(
        <div>
            <h1>Component 2</h1>
            <Component3 name={name}/>
            
            </div>
    )
}
function Component3({name}){
    return(
        <div>
            <h1>Component 3</h1>
            <Component4 name={name}/>
            
            </div>
    )
}
function Component4({name}){
    return(
        <div>
            <h1>Component 4</h1>
            <Component5 name={name}/>
            
            </div>
    )
}
function Component5({name}){
    return(
        <div>
            <h1>Component 5</h1>
          <h1>Hello{name} again</h1>
            
            </div>
    )
}
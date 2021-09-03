import React, { useState } from 'react';
function  Child(props) {
    return(<div>
        <GrandChild value={props.value} />
        </div>
    )
    
}
function  GrandChild(props) {
    return (
        <h1>{props.value}</h1>
    )
    
}
export default function PropsState(){
    const [value,setValue]=useState(1);


    return(
    <div>
        <Child value={value} />
    </div>
    )
}
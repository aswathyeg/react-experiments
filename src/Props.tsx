import React from 'react';
function Child(props){
    return (
        <div>
            <GrandChild value={props.value}/>
        </div>
    )

}

function GrandChild(props){
    return(
        <div>
           {props.value} 
        </div>
    )
    
}

export default function Props(){
    return (
        <div>
            <Child value={1}/>
        </div>
    )

    

}
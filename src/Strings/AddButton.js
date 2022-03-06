import React from 'react';
export default function AddButton(props){
    const handleClick=()=>{
       

    }

    return(
        <div>
           
            <button onClick={handleClick}>camelCase</button>
            <p>
        {props.names}
    </p>
             
        </div>
    )
}
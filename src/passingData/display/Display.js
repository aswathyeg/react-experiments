import React from 'react';
const Display=(props)=>{
    return(
        <div>
       
        <ul>
            
            {props.userValue.map((i)=>(
           
                <li>{i.username}</li>
           
            )
            )}
         </ul>
         </div>
    )



}
export default Display;
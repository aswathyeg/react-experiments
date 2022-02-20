import React from 'react';
import {ACTIONS} from './Toggling';
const Details=({details,dispatch})=>{
    return(
        <div>
            <span style={{color:details.complete? '#AAA':'#000'}}>
                {details.name}
            </span >
            <button onClick={()=>dispatch({type:ACTIONS.TOGGLE,payload:{id:details.id}})}>
                TOGGLE
            </button >
            <button onClick={()=>dispatch({type:ACTIONS.DELETE,payload:{id:details.id}})}>
                DELETE
            </button>
        </div>
    )
}
export default Details;
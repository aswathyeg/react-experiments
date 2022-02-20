import React from 'react';
import {ACTIONS} from './Toggling';
const Details=({details})=>{
    return(
        <div>
            <span>
                {details.text}
            </span>
            <button onClick={()=>{}}>
                UPDATE
            </button>
            <button>
                DELETE
            </button>
        </div>
    )
}
export default Details;
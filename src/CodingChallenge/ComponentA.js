import HigherOrderExample from './HigherOrderExample';
import React from 'react';
const ComponentA=({value,incrementHandler})=>{
    return(
        <div>
            <button onClick={incrementHandler}>+2</button>

            <h2>{value}</h2>
        </div>
    )

}
export default HigherOrderExample(ComponentA,2);
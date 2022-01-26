import React, { useState } from 'react';

const HigherOrderExample=(component,incrementValue)=>{

    const Hoc=()=>{
        const [value,setValue]=useState(0);
        
       const incrementHandler=()=>{
        setValue(value+incrementValue);
       }
        return <component value={value} incrementHandler={incrementHandler} />


    }
    return Hoc;
    return(
        <div></div>
    )
    
}
export default HigherOrderExample;
import React, { useState } from 'react';
import ChildComponent from './ChildComponent'

function ParentComponent(props:any){
let[counter,setCounter]=useState(0);
const press=()=>{
    setCounter(++counter)
}

    return(
        <div>
            <button onClick={press}>Add</button>
            <ChildComponent countervalue={counter}/>
            
        </div>
    );

}
export default ParentComponent;
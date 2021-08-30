
import React, { useState } from 'react';
function AddMe(){

    let [count,setCount]=useState(0);
    const increment=()=>{
        setCount(++count)

    }
    const decrement=()=>{
        setCount(--count)
    }
   const fetchData=()=>{
       

    }
return(
    <div>
       <p> Current number:{count}</p>
    <button onClick={increment}> increment</button>
    <button onClick={decrement}> decrement</button>
    <button onClick={fetchData}>fetchData</button>
    </div>
)
}
export default AddMe;
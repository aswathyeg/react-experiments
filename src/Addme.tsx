
import { Button } from '@material-ui/core';
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
       <Button> Current number:{count}</Button>
       <br></br>
    <Button onClick={increment}> increment</Button>
    <Button onClick={decrement}> decrement</Button>
    <Button onClick={fetchData}>fetchData</Button>
    
    </div>
)
}
export default AddMe;
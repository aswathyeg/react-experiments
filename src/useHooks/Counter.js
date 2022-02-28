
import React,{useReducer} from 'react';
export default function Counter(){
function reducer(state, action){
    switch(action.type){
        case 'addition':
            return 
    }
}

const handleSubstract=()=>{
    setCount(count-1)

}
const[state,dispatch]=useReducer(reducer,[])
const handleAdd=()=>{
    dispatch({})

}
    return(
        <div>
<button onClick={handleAdd}>Add</button>
<button onClick={handleSubstract}>Substract</button>
<p>
    {count}
</p>
        </div>
    )
}
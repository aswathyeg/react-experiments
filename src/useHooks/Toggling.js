
import React, { useState,useReducer } from 'react';
import Details from'./Details';

export const ACTIONS={
    ADD:'add',
    TOGGLE:'toggle',
    DELETE:'delete'
}

function reducer( state,action){
    switch(action.type){
        case ACTIONS.ADD:
            return[...state,newName(action.payload.name)]

            case ACTIONS.TOGGLE:
             
                return state.map(details=>{
                    if(details.id===(action.payload.id)){//checking the clicked id is same as inpt id
                    return {...details,complete:!details.complete}
                    }
                    return details

                })
                case ACTIONS.DELETE:
                    return state.filter(details=>details.id!=action.payload.id)
                    default:
                        return state
    }


}
 function newName(name){
     return{id:Date.now(),name:name,complete:false}

 }

const Toggling = () => {
    const [state, dispatch] = useReducer(reducer,[]);
    const [name,setName]=useState('');

    const handleChange=(e)=>{
        setName(e.target.value);
        

    }
    const handleSubmit=(e)=>{
        e.preventDefault();//prevent page refreshing
        setName(''); //clear field after rendering
        dispatch({type:ACTIONS.ADD,payload:{name:name}})
        

    }
   
console.log(state);
    return(
        <div>
  <form onSubmit={handleSubmit}>
      <input type="text" value={name} 
      onChange={handleChange}/>
  </form>
  {state.map(details=>{
      return(<Details key={details.id} details={details} dispatch={dispatch}/>
  )})}
        </div>
    ) 
}

export default Toggling;


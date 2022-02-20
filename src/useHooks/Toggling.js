
import React, { useState,useReducer } from 'react';
import Details from'./Details';
export const ACTIONS={
    ADD:'add',
    UPDATE:'update',
    DELETE:'delete'
}

function reducer( state,action){
    switch(action.type){
        case ACTIONS.ADD:
            return [...state,newText(action.payload.text)]
            // case ACTIONS.UPDATE:
            //     return
            //     case ACTIONS.DELETE:
            //         return

    }


}
 function newText(text){
    return { id: Date.now(), text: text}     

 }

const Toggling = () => {
    const [state, dispatch] = useReducer(reducer,[]);
    const [text,setText]=useState('');

    const handleChange=(e)=>{
        setText(e.target.value);
        

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setText('');
        dispatch({type:ACTIONS.ADD,payload:{text:text}}) // this payload.text will goes to reducer


    }
   
console.log(state);
    return(
        <div>
    <form onSubmit={handleSubmit}>
        <input type="text" value={text}
        onChange={handleChange}/>
      
    </form>
   {state.map(details=>{
       return(<Details key={details.id}  details={details} />)
   })}
        </div>
    ) 
}

export default Toggling;


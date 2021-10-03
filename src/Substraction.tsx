
import *as React from 'react';
const initialState={count:0}
type ACTIONTYPE=|{
    type:"decrement",payload:string
}
function reducer(state:typeof initialState,action:ACTIONTYPE){
switch (action.type) {
    case 'decrement':
        return{count:state.count-Number(action.payload)}
        

    default:
       throw new Error();
}
}
function Substraction(){
    const[state,dispatch]=React.useReducer(reducer,initialState);
    const substract=()=>{
      dispatch({type:'decrement',payload:'5'})  
    }
    return(
        <div>
            <button onClick={substract}>-</button>
        </div>
    )

}
export default Substraction;


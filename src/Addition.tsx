import *as React from "react";
const initialState={count:0}
type ACTIONTYPE=
|{type:"increment",payload:number

}

function reducer(state:typeof initialState,action:ACTIONTYPE){
switch(action.type){
case 'increment':
   return {count:state.count+action.payload}
   default:
       throw new Error();
}
}

function Addition(){
    const [state,dispatch]=React.useReducer(reducer,initialState);
    const add=()=>{
dispatch ({type:'increment',payload:5})
    }
    return(
    <>
    
    Count:{state.count}
    
    <button onClick={add}>+</button>
    </>
    );
    
}
export default Addition;
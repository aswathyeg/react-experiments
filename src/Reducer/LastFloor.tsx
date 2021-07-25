import *as React from 'react';

const InitialState={deliveryStatus:"In progress..."}

 type ACTIONTYPE=
|{type:"inProgress",payload:string}

function  reducer(state:typeof InitialState,action:ACTIONTYPE) {
switch(action.type){
    case"inProgress":
    return{deliveryStatus:state.deliveryStatus="Delivered"}
    default:
    throw new Error()

}
    
}
function LastFloor(){
    const [state,dispatch]=React.useReducer(reducer,InitialState);
    const changeStatus=()=>{
        dispatch({type:"inProgress",payload:"Delivered"});

    }
return(<div>
    Status:{state.deliveryStatus}
    <button onClick={changeStatus}>Status</button>
</div>)

}
export default LastFloor;
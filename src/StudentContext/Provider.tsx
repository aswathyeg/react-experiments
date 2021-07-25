import React,{useState} from 'react';
import PackageContext from './context';

const Provider=(props:any)=>{
    const[state,setState]=useState({
        name:"John",
        age:"a",
        phone:"b",
        isPresent: "waiting till 9am"

    });
    return(

<PackageContext.Provider

value={{
    data:state,
    updateDetails: () => {
        setState({ ...state, isPresent: "Present" });
    }

}}

        >
             {props.children}
        </PackageContext.Provider>
    )
}
export default Provider;


import React,{useState} from 'react';
import ClassProvider from './Context'
const Provider=()=>{
    const[state,setState]=useState({
        name:"John",
        age:6,
        phone:874286

    });
    return(

<ClassProvider.Provider

value={{
    data:state,
    
}}

        ></ClassProvider.Provider>
    )
}
export default Provider;


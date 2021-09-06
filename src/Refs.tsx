
//to automatically focus text field
import React, { useEffect, useRef } from 'react';
export default function Refs(){
    const inputRef=useRef()as React.MutableRefObject<HTMLInputElement>;
    useEffect(()=>{
        inputRef.current.focus();

    },[])
    return (
        <div>
            <input ref ={inputRef} type="text"></input>
        </div>
    )
}
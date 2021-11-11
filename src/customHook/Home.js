import React, { useState,useEffect } from 'react';
export default function Home(){

    const [data,setData]=useState(null);
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/todos')
.then((res)=>res.json())
.then((data)=>setData(data));
console.log(data);
    
},[])

    
    return(
        <div>
{data&&data.map((item)=>
    <p>{item.title}</p>

)}
        </div>
    )
}
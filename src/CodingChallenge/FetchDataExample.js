import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function FetchDataExample(){
    const [data,setData]=useState([]);
   const fetchdata=async()=>{

        const {data}=await axios.get( 
            "https://jsonplaceholder.typicode.com/posts/1/comments");
            setData(data);

    }
    useEffect(()=>{
        fetchdata()
    },[]);
    return(
    <div>
<ui >
{data.map((item)=>{
    return(
        <div>
    <li>
Id:{item.id}
</li>
<li>
Name:{item.name}
</li>
<li>
Email:{item.email}
</li>
</div>
    )
})}
    
</ui>
    </div>
    )
}


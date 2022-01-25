import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function FetchDataExample(){
    const [data,setData]=useState([]);
    
    const fetchData=async()=>{
        const {data}=await axios.get( "https://jsonplaceholder.typicode.com/posts/1/comments");
        setData(data);

    }
    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <div>
            <ui>
                {data.map((item)=>{
                    return(
                        <div>

                <li>Id:{item.id}</li>
                <li>Name:{item.name}</li>
                <li>Email:{item.email}</li>
                </div>
                    )
                })}
                
            </ui>
        </div>
    )
   
}


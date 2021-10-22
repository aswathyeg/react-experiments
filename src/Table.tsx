import axios from "axios"
import { useEffect, useState } from "react"

export default function Table(){
    const [list,setList]=useState({})

  const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
       
      };


    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/todos')
        // .then(res=>{
        //     console.log(res);

        // })

        fetch('https://jsonplaceholder.typicode.com/todos',requestOptions)
       .then(async response=>{
        const data=await response.json();
        console.log(data);
    
        
})
.catch(error => {
    console.error('There was an error!', error);
  });

    },[])
    return(
        <div>


        </div>
    )
}
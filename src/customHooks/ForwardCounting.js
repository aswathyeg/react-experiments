import React, { useEffect, useState } from 'react';
const ForwardCounting = () =>{
    const [counter,setCounter] = useState(0);
    useEffect(()=>{
        const interval = setInterval(() => {
            setCounter((prevState) =>{
                prevState+1;
            })     

        },1000)
        return ()=> clearInterval(interval);
    },[])
    return(
        <div>
         <Card>{counter}</Card>   
        </div>
    )

}
export default ForwardCounting;
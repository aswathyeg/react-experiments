
import { Button } from '@material-ui/core';
import React, { useState ,useEffect} from 'react';
import 'axios';
function AddMe(){
    const axios = require('axios').default;//for intellisence

    // const instance = axios.create({ //created custom config
    //     baseURL: 'https://some-domain.com/api/',
    //     timeout: 1000,
    //     headers: {'X-Custom-Header': 'foobar'}
    //   });

      
const fetchData=()=>{
    return axios.get('http://localhost:3000')
.then ((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err)
})
}
    let [count,setCount]=useState(0);
    const increment=()=>{
        setCount(++count)
        console.log('foo');

    }
    const decrement=()=>{
        setCount(--count)
    }
useEffect(()=>{
    fetchData();

},[])


    
return(
    <div>
       <Button> Current number:{count}</Button>
       <br></br>
    <Button onClick={increment}> increment</Button>
    <Button onClick={decrement}> decrement</Button>
    
    
    </div>
)
}
export default AddMe;
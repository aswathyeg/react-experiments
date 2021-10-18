import React, { useEffect, useState } from 'react';
import { getList } from '../services/List';
import './ApiExample.css';

function ApiExample() {
  const [list, setList] = useState([]);
  
  useEffect(()=>{
      let mounted=true;
      getList()
      .then(items=>{
          if (mounted){
              setList(items)
          }
      })
      return()=>mounted=false;
  },[])
  return(
      <div className="wrapper">
          <h1>Grocery List</h1>
          <ul>
              
                  {list.map(item=><li key={item.item} >{item.item}</li>)}
              
          </ul>
      </div>
    
    
  )
}

export default ApiExample;
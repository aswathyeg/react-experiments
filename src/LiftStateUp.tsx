import React, { useState } from 'react';
function List(props){
    return(
        <div>
            {props.items.map((item,index)=>{
                return<h1 key={index}>{item}</h1>

              })}
        </div>
    )

}
function ItemCount (props) {
    return (
        <div>
           <h1>{props.count}</h1> 
        </div>
    )
    
}
export default function  LiftStateUp (){//closest common ancesstor
    const[items,setItems]=useState(["foo","bbb","ccc"])//shared state
    return(
        <div>
<List items={items}/>
<ItemCount count={items.length} />

        </div>
    )

}
import React, { useState } from 'react';
const data=[];
for(let i=0;i<10;i++){
    data.push({
        number:i,
        id:"id*i"
    });
}
function Item(props){
    return<h1 onClick={()=>{
        props.delete(props.id)}}>{props.number}</h1>;
}
export default function KeyExample(){ 

    const [state,setState]=useState(data);

const deleteNumber=(n)=>{
    const newData=state.filter(num=>num.id!==n);
    setState(newData);

}


    return (
        <div>
{state.map((n,i)=>{
    return(
        <Item delete={deleteNumber} key={n.id} id={n.id} number={n.number}/>
    );
})}
        </div>
    
    )}
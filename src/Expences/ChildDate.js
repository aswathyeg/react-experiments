import React from 'react';
export default function  ChildDate(props){
    const date=props.date.toLocaleString('en-US', { month: 'long' });
    return(
        <div>
           <h2> {date}</h2>
        </div>
    )
}
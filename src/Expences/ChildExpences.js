import React from 'react';
export default function  ChildExpences(props){
    return(
        <div>
            <div>
                <div>
                    Month
                </div>
            </div>
<h2>{props.title}</h2>
<div>
    {props.date.toLocaleString('en-US',{month:'long'})}
    </div>
        </div>
    )
}
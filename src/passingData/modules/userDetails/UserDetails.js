import React from 'react';

export default function userDetails (props) {
    
    return (
        <div className="outer">
            <h3>UserDetails</h3>
            <br></br>
            <div>
           <h3>Welcome {props.userIformation.username}</h3>
           </div>
        </div>
    )
}
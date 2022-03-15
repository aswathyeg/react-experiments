import React, { useState } from 'react';
import User from'./User';
const DUMMY_USERS=[
    {id:1,name:"James"},
    {id:2,name:"Max"},
    {id:3,name:"John"}

]
export default function  Users(props) {
    const[showUsers,setShowUsers]=useState(true);
    const handleClick=()=>{
        setShowUsers((currentState)=>!currentState);

    };
    const userList=(    //not a function
        <ul>
            {DUMMY_USERS.map((users)=>(
                
                <User key={users.id} name={users.name}/>
                )
            )}
        </ul>
    )
    return(
        <div>
            <button onClick={handleClick}>
                {showUsers?'Hide':'Show'}Users
            </button>
            {showUsers && userList}

        </div>
    )
    
}
import React, { Fragment, useEffect, useState } from 'react';
import Users from './Users';
const DUMMY_USERS=[
    {id:1,name:"James"},
    {id:2,name:"Max"},
    {id:3,name:"John"}

]
export default function UserFinder (){
    
    const [filteredUsers,setFilteredUsers]= useState(DUMMY_USERS);
    const[searchTerm,setSearchTerm]=useState('');
    
    useEffect(()=>{
        setFilteredUsers(DUMMY_USERS.filter((user)=>
            user.name.includes(searchTerm))
        );

    },[searchTerm]

    );
    const handleChange=(e)=>{
        e.preventDefault();
        setSearchTerm(e.target.value);
    }
   

        return(
            <Fragment>
            <div>
                <input type="search" onChange={handleChange}/>
            </div>
            <Users users={filteredUsers} />
            </Fragment>
        )
    }


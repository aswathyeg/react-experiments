import React, { Fragment, useEffect, useState } from 'react';
import Users from './Users';
const DUMMY_USERS=[
    {id:1,name:"James"},
    {id:2,name:"Max"},
    {id:3,name:"John"}

]
export default class UserFinder extends React.Component{
    constructor(){
        super();
        this.state={
            searchTerm:'',
            filteredUsers:DUMMY_USERS

        }

    }
    
    // const [filteredUsers,setFilteredUsers]= useState(DUMMY_USERS);
    // const[searchTerm,setSearchTerm]=useState('');
    
componentDidUpdate (prevProps,prevState){
    if(prevState.searchTerm !== this.state.searchTerm){
        this.setState({
            filteredUsers:DUMMY_USERS.filter((user)=>
            user.name.includes(this.state.searchTerm)
        ),


    });
}}


     handleChange(e){
        e.preventDefault();
        this.setState({searchTerm : e.target.value});
    }
   
render(){
    return(
        <Fragment>
        <div>
            <input type="search" onChange={this.handleChange.bind(this)}/>
        </div>
        <Users users={this.state.filteredUsers} />
        </Fragment>
    )
}
       
    }


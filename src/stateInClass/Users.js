import React, { useState } from 'react';
import User from'./User';
const DUMMY_USERS=[
    {id:1,name:"James"},
    {id:2,name:"Max"},
    {id:3,name:"John"}

]
export default class  Users extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showUsers:'true'

        }
    }
   
    handleClick(){
       this.setState((currentState)=>{
            return{showUsers:!currentState.showUsers};

    });
}
   
    render(){
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
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.showUsers?'Hide':'Show'}Users
                </button>
                {this.state.showUsers && userList}
    
            </div>
        )

    }
   
    
}
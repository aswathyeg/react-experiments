import React, { Component } from 'react';
import TodoList from './TodoList';

export default class MainList extends Component{
    constructor(){
        super();
        this.state={
    
 list:[
    {
        id:1,
        text:'Learn Context',
        completed:false

    },
    {
        id:2,
        text:'Learn Redux',
        completed:false
    },
    {
        id:3,
        text:'Learn Callback',
        completed:false
    }
]

        }}

render(){

    let title='Things to do'

    
        return(
            <div className="container">
                <div className="raw">
                <TodoList title={title} list={this.state.list}/>
                </div>
            </div>
        )
    
        }
}
import React from 'react';
import TodoList from './TodoList';
const list=[
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
];
let title='Things to do';

export default function MainList(){
    
        return(
            <div>
                <TodoList title={title} list={list}/>
            </div>
        )
    

}
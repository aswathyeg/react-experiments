import React from 'react';
const list=[
    {
        id:1,
        text:'Learn Context',
        completed:false

    },
    {
        id:2,
        text:'Learn REdux',
        completed:false
    },
    {
        id:3,
        text:'Learn Callback',
        completed:false
    }
];
let title='Things to do';

export default class MaiList extends React.Component{
    render(){
        return(
            <div>
                <TodoList title={title} list={list}/>
            </div>
        )
    }

}
import React from 'react';
import { ACTIONS } from './ReducerForm';

const Todo = ({todo,dispatch}) => {
    return (
    <div>
<span style={{color:todo.complete ? '#AAA':'#000'}}>{todo.name}</span>

<button onClick={()=>dispatch({type:ACTIONS.TOGGLE,payload:{id:todo.id}})}>Toggle</button>
<button onClick={()=>dispatch({type:ACTIONS.DELETE,payload:{id:todo.id}})}>Delete</button>

    </div>

    )
}

export default Todo;



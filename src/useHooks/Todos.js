
import React, { useReducer, useState } from 'react';
import Todo from './Todo';
const ACTIONS = {
    ADD_TO: 'add',
    TOGGLE: 'toggle',
    DELETE: 'delete'
}
function reducer(todo, action) {
    switch (action.type) {
        case ACTIONS.ADD_TO:
            return [...todo, newtodo(action.payload.name)]

        case ACTIONS.TOGGLE:
            return todo.map(i => {
                if (i.id === action.payload.id) {
                    return { ...i, complete: !i.complete }
                }
                return i;
            })
            
        case ACTIONS.DELETE:
            return todo.filter(i => i.id !== action.payload.id)
        default:
            return todo

    }
}

function newtodo(name) {
    return { id: Date.now(), name: name, complete: false }

}

export default function Todos() {

    const [todo, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        dispatch({ type: ACTIONS.ADD_TO, payload: { name: name } })

    }
    console.log(todo);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange} />

                {/* <p>
    {state.count}
</p> */}
            </form>
            {todo.map(i => {
                return <Todo key={i.id} todo={i} dispatch={dispatch} />
            })}
        </>
    )
}
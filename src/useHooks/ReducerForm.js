import { useReducer, useState } from 'react';
import Todo from './Todo';

export const ACTIONS = {
    ADD_TODO: 'add_todo',
    TOGGLE: 'toggle',
    DELETE: 'delete'
}
function reducer(todos, action) {
    switch (action.type) {

        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]

        case ACTIONS.TOGGLE:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTIONS.DELETE:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }

}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}


const ReducerForm = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });// this payload.name will goes to reducer



    }
    console.log(todos);
    return (
        <div>


            <form onSubmit={handleSubmit}>
                <input type="text" value={name}
                    onChange={handleChange} />
            </form>
            {todos.map(todo => {
                return (<Todo key={todo.id} todo={todo} dispatch={dispatch} />)

            })}
        </div>

    )
}

export default ReducerForm;
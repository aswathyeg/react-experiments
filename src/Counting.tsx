import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 }
        default:
            throw new Error();

    }

}


function Counting() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const increment = () => {
        dispatch({
            type: 'increment'
        })

    }
    const decrement = () => {
        dispatch({
            type: 'decrement'
        })

    }
    return (
        <div>
            <p>Current Value:{state.count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counting;
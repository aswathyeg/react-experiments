
import {useReducer } from 'react';
const ACTIONS={
    INCREMENT:'add',
    DECREMENT:'substract'
}
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {
                count: state.count + 1
            }
        case ACTIONS.DECREMENT:
            return {
                count: state.count - 1
            }
            default:
            return state;

    }

}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    
    const handleAdd = () => {
        dispatch({ type: ACTIONS.INCREMENT });
    }
    const handleSubstract = () => {
        dispatch({ type: ACTIONS.DECREMENT });


    }

    return (
        <div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubstract}>substract</button>
            {state.count}
        </div>

    )
}
export default CounterReducer;
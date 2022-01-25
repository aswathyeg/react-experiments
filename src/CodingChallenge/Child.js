import React, { useContext } from 'react';
import countContext from './CountContext';
export default function Child() {

    const context = useContext(countContext);

    const { increment, decrement } = context;

    return (
        <div>
            <button onClick={increment}>


                +
            </button>
            <button onClick={decrement}>


                -
</button>


        </div>
    )
}
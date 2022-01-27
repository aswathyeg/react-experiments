// context example
import React, { useState } from 'react';
import Child from './Child';
import CountContext from './CountContext';
export default function Counter() {

    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(++count);
    }
    const decrement = () => {
        setCount(--count);
    }

    return (
        //wrap the child component and pass the values/functions to share
        <CountContext.Provider value={{ increment, decrement }}>
            <Child />
            <p>{count}</p>
        </CountContext.Provider>
    )
}
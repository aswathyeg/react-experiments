
import React, { useState } from 'react';

function Counting(props: any) {
    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(++count);
    }

    const decrement = () => {
        setCount(--count);
    }

    return (
        <div>
            <p>Current Value:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )

}
export default Counting;
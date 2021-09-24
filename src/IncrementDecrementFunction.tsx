
import { useState } from 'react';

function Counting() {
    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(++count);
    }

    const decrement = () => {
        setCount(--count);
    }

    return (
        <div>
            <h1>This is counter app</h1> //for testing
            <p>Current Value:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )

}
export default Counting;

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
            <h1>This is counter app</h1> 
            <div  id="counter-value">{count}</div>
            <button id="increment-btn" onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )

}
export default Counting;
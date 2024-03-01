import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    
    const toIncrement = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={toIncrement}>Increment</button>
        </div>
    )
}

export default Counter;
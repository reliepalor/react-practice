import React, {useState} from 'react'

const Updater = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }



    return (
        <div>
            <h2>Counter</h2>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>0</button>
            <button onClick={increment}>+</button>
            <p>{count}</p>
        </div>
    )
}

export default Updater;
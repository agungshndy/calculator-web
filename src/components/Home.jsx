import { useState } from 'react';

function Home(){

    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1)
    }

    const decrement = () => {
        setCount(count => count - 1)
    }

    return (
        <>
        <h1>Hello World!</h1>
        <h2>{count}</h2>
        <button onClick={decrement} className='gap-2'>-</button>
        <button onClick={increment}>+</button>
        </>
    )
}

export default Home;
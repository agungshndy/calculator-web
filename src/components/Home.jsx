<<<<<<< HEAD
function Home(){

    return (
        <>
        <h1>Welcome to Calculator Online</h1>
        </>
=======
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
        <div>
        <h1>Hello World!</h1>
        <h2 className='items-center text-3xl'>{count}</h2>
        <button onClick={decrement} className='mx-4'>-</button>
        <button onClick={increment} className='mx-4'>+</button>
        <button>=</button>
        <button>x</button>
        <button></button>
        <button></button>
        </div>
>>>>>>> 6eef751992574cdfa554c5b9847252ba71844cc6
    )
}

export default Home;
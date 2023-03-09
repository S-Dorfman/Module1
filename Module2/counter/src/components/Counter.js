import { useState } from 'react';

function Counter() {
    //state variable
    const [counter,setCounter] = useState(0);
    // const[countByTwo, setCountByTwo] = useState(0);
    // const[muliplytByThree, setCountByThree] = useState(3);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    const handleClickByTwo = () => {
        setCounter(counter + 2);

    }

    const handleClickByThree = () => {
        setCounter(counter * 3);
    }

    const handleClickDivThree = () => {
        setCounter(counter / 3);
    }

    return(
        <div>
            <h2>Counter: {counter}</h2>

            <button onClick={handleClick} >Click me +1</button>
            <button onClick={handleClickByTwo} >Click me +2</button>
            <button onClick={handleClickByThree}>Click me *3</button>
            <button onClick={handleClickDivThree}>Click me /3</button>
        </div>
    )
}

export default Counter; 
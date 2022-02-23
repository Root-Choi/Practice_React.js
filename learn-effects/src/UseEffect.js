import { useEffect, useState } from 'react';

function UseEffect() {
    const [counter, setCounter] = useState(0);
    const onClick = () => {
        setCounter((prev) => prev + 1);
    };
    console.log('I run all the time');

    useEffect(() => {
        console.log('call the API');
    }, []);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default UseEffect;

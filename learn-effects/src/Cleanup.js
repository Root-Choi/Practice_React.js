import { useState, useEffect } from 'react';

function Hello() {
    useEffect(() => {
        console.log('created!');
        return () => console.log('destroyed');
    }, []);
    return <h1>Hello</h1>;
}

// function Hello() {
//     const byeFn = () => {
//         console.log('bye :(');
//     };
//     const hiFn = () => {
//         console.log('hi :)');
//         return byeFn;
//     };
//     useEffect(hiFn, []);
//     return <h1>Hello</h1>;
// }

function Cleanup() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);

    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
        </div>
    );
}

export default Cleanup;

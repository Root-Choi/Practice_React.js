import { useState } from 'react';
import ToDo from './ToDo';

function App() {
    const [index, setIndex] = useState(0);
    const showWhat = (e) => {
        setIndex(e.target.value);
    };
    return (
        <div>
            <h1>Tiny Projects for React-Practice</h1>
            <select value={index} onChange={showWhat}>
                <option value="0">Select to show</option>
                <option value="1">To Do</option>
                <option value="2">Coin Tracker</option>
            </select>
            <hr />
            {index === '0' ? 'Please Select' : null}
            {index === '1' ? <ToDo /> : null}
            {index === '2' ? 'Coin Tracker' : null}
        </div>
    );
}

export default App;

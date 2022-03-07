import { useState } from 'react';

function ToDo() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => {
        setToDo(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === '') {
            return;
        }
        setToDos((currentArr) => [toDo, ...currentArr]);
        setToDo('');
    };

    return (
        <div>
            <h1>My To Dos : ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
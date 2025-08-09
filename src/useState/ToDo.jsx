import React, { useState } from 'react';

const ToDo = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const handleTask = () => {
        if(task.trim() === '') return; 

        setTodos([...todos, {id: Date.now(), text: task, done: false}]);
        setTask('');

    };

    const toggleDone = (id) => {
        const updatedTodos = todos.map(todo => 
            todo.id === id ? {...todo, done: !todo.done} : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2>To-Do List</h2>

            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter a new task'/>
            <button onClick={handleTask}>Add Task</button>

            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => toggleDone(todo.id)}
                        style={{textDecoration: todo.done ? 'line-through' : 'none'}}
                    > 
                        {todo.text}
                    </li>
                ))

                }
            </ul>
        </div>
    )


}

export default ToDo;
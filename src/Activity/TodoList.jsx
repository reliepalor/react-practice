import {useState} from 'react';

const TodoList = () => {

    const [task, setTask] = useState(["Study React", "Todo List Activity", "Sleep Early"]);
    const [newTask, setNewTask] = useState('');


    const handleInputChane = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () => {


        if(!newTask){
            alert("please enter task")
        }else{
            setTask(t => [...task, newTask]);
            setNewTask("");
        }
    }
    const deleteTask = (index) => {

        const updatedTasks = task.filter((element, i) => i !== index);
        setTask(updatedTasks)
    }
    const moveTaskUp = (index) => {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],  updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    const moveTaskDown = (index) => {
        if(index < tasks.length - 1 ) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],  updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }


    return (
        <div className='todo-list'>
            <h2>To Do List</h2>

            <div className='input-con'>
                <input type="text" value={newTask} onChange={handleInputChane} placeholder='enter a task...'/>
                <button className='add-btn' onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {task.map((task, index) => <li key={index}>
                                            <span className='text'>- {task}</span> &nbsp;
                                           <div className='button-con'>
                                                <button className='delete-btn' onClick={() => deleteTask(index)}>delete</button>
                                                <button className='moveup-btn' onClick={() => moveTaskUp(index)}>☝️</button>
                                                <button className='movedown-btn' onClick={() => moveTaskDown(index)}>👇</button>
                                           </div>
                                        </li>)}
            </ol>
        </div>
    )

}
export default TodoList;
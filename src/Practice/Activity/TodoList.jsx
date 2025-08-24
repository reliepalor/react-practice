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
            const updatedTasks = [...task];
            [updatedTasks[index],  updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    const moveTaskDown = (index) => {
        if(index < task.length - 1 ) {
            const updatedTasks = [...task];
            [updatedTasks[index],  updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }


    return (
        <div className='todo-list'>
            <h2>To Do List</h2>

            <div className='input-con'>
                <input type="text" 
                value={newTask} 
                onChange={handleInputChane} 
                placeholder='enter a task...'
                className='border border-gray-500 shadow-lg hover:bg-gray-200 duration-200 ease-in-out'
                />
                <button className='add-btn text-white hover:scale-105 duration-400 ease-in-out' onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {task.map((task, index) => <li key={index} className='w-full flex justify-center items-center gap-5 p-2'>
                                            <div className='text-center w-[50%] border-b border-gray-600'>
                                                <p className='text-center w-[100%] overflow-hidden '>- {task}</p> &nbsp;
                                            </div>

                                           <div className='w-[50vw] flex justify-center gap-3 w-[50%]'>
                                                <button className='text-white hover:scale-105 duration-500 ease' onClick={() => deleteTask(index)}>delete</button>
                                                <button className='text-white hover:scale-105 duration-500 ease' onClick={() => moveTaskUp(index)}>☝️</button>
                                                <button className='text-white hover:scale-105 duration-500 ease' onClick={() => moveTaskDown(index)}>👇</button>
                                           </div>
                                        </li>)}
            </ol>
        </div>
    )

}
export default TodoList;
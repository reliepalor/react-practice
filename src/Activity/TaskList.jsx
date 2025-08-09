import Task from './Task';

const TaskList = ({ tasks, onMarkDone }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          name={task.name}
          category={task.category}
          isDone={task.done}
          onMarkDone={() => onMarkDone(task.id)}  
        />
      ))}
    </ul>
  );
};

export default TaskList;

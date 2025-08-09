const Task = ({ name, category, isDone, onMarkDone }) => {
  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      border: '1px solid #ccc',
      marginBottom: '8px',
      borderRadius: '5px',
      backgroundColor: isDone ? '#e6ffe6' : '#f9f9f9',
      color: 'black'
    }}>
      <div>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Category:</strong> {category}</p>
      </div>
      <div>
        {
          isDone
            ? <span style={{ fontSize: '1.5rem' }}>✅</span>
            : <button onClick={onMarkDone}>Mark Done</button>
        }
      </div>
    </li>
  );
};

export default Task;

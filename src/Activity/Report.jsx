const Report = ({activity, type, isComplete, onMarkComplete}) => {
    return (
        <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      border: '1px solid #ccc',
      marginBottom: '8px',
      borderRadius: '5px',
      backgroundColor: isComplete ? '#e6ffe6' : '#f9f9f9',
      color: 'black'
    }}>
            <div>
                <p><strong>Activity:</strong> {activity}</p>
                <p><strong>Type: </strong>{type}</p>
            </div>
            <div>
                {
                    isComplete
                    ? <span>✅</span>
                    : <button onClick={onMarkComplete}>Mark Done</button>
                }
            </div>
        </li>
    )
}

export default Report;
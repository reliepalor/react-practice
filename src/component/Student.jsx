const Student = ({name, age}) => {
    return (
        <div style={{borderBottom: '1px solid gray', padding: '10px', margin: '10px'}}>
            <p>Hello! My name is {name} and I am {age} years old.</p>
          
        </div>
    )
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isAbsent: true,
}

export default Student
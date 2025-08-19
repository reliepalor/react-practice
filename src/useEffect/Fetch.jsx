import React from 'react'
import {useState, useEffect} from 'react';

const Fetch = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json() )
        .then(data => setUsers(data));
    }, []); 

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(users => (
            <li key={users.id}>{users.user} - user.email</li>
        ))}
      </ul>
    </div>
  )
}

export default Fetch

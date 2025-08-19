import React from 'react'
import {useState, createContext} from 'react';
import ComponentB from './ComponentB'

export const UserContext = createContext();
const ComponentA = () => {

    const [user, setUser] = useState("Vue");


  return (
    <div className='border p-2 w-full'>
      <h2>Component A</h2>
      <p>{`Hello: ${user}`}</p>
      <UserContext.Provider value={user}>
        <ComponentB user={user}/>
      </UserContext.Provider>
      
    </div>
  )
}

export default ComponentA

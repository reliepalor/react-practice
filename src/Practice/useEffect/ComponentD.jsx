import React from 'react'
import {useContext} from 'react';
import { UserContext } from './ComponentA';
const ComponentD = () => {

  const user = useContext(UserContext);

  return (
    <div className='border p-2 w-full'>
      <h2>Component D</h2>
      <p>{`Bye ${user}`}</p>
    </div>
  )
}

export default ComponentD

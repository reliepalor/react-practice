import React, {useContext} from 'react'
import { UserContext } from './ComponentA.jsx'
import ComponentD from './ComponentD.jsx'

const ComponentC = () => {

  const user = useContext(UserContext);
  return (
    <div className='border p-2 w-full'>
      <h2>Component C</h2>
      <h2>{`Hello again ${user}`}</h2>
      <ComponentD/>

    </div>
  )
}

export default ComponentC

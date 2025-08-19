import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <div className='border p-2 w-full'>
      <h2>Component B</h2>
      <ComponentC/>

    </div>
  )
}

export default ComponentB

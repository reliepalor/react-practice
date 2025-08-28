import React from 'react'
import {NavLinkLink} from 'react-router-dom'
const AllPets = () => {
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
      <NavLink
        to="/pets"
        
        className='block bg-gray-600 text-white text-center py-4 px-6 rounded-xl shadow-md hover:bg-gray-700'
      >
      View All Pets
      </NavLink>
    </section>
  )
}

export default AllPets

import React from 'react'
import Hero from '../components/Hero.jsx'
import PetListings from '../components/PetListings.jsx'
const HomePage = () => {
  return (
    <div className='max-h-screen mb-20'>
      <Hero/>
    <PetListings isHome={true}/>
    </div>
  )
}

export default HomePage

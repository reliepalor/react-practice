import React from 'react'
const Hero = ({title="Paw Haven", subtitle="Find your new best friend here and enjoy!"}) => {
  return (
    <section className='bg-sky-50 py-10 border shadow-md rounded-lg h-[40vh] flex justify-center items-center'>
        <div className='bg-sky-100max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
            <div className='text-center'>
                <h1 className='text-4xl font-extrabold text-sky-800 sm:text-5xl md:text-6xl mb-2'>
                    {title}
                </h1>
                <p className='sm:text-xl md:text-2xl lg:text-4xl'>
                    {subtitle}
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero

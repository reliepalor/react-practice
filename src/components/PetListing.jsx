import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

const PetListing = ({pet}) => {

    const [showFullDescrption, setShowFullDescription] = useState(false);
    let description = pet.description;

    if(!showFullDescrption){
        description = description.substring(0, 30) + '...';
    }

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescrption);
    }


    return (
        <div className='bg-white rounded-xl shadow-md relative'>
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{pet.breed}</div>
                    <h3 className='text-xl font-bold'>{pet.name}</h3>
                    <div className="text-gray-600 my-2">{pet.category}</div>
                </div>

                <div className="duration-500 ease-in-out">{description}</div>

                <button className='text-indigo-500 mb-5 hover:text-indigo-700 cursor-pointer' onClick={toggleDescription}>
                    {showFullDescrption ? 'show less' : 'show more'}
                </button>

                <div className='flex justify-between items-center'>
                    <h3 className='text-indigo-500 mb-2'>{pet.gender}</h3>
                    <div></div>
                    <h3 className='text-indigo-500 mb-2'>{pet.color}</h3>
                </div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                    <FaMapMarker className="inline text-lg mb-2 text-red-500" />
                    <span className="text-gray-800">{pet.price}</span>
                </div>

                <Link
                    to={`/pet/${pet.id}`}
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                    Read More
                </Link>
                </div>

            </div>
        
        </div>
    )
}

export default PetListing

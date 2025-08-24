import {useState} from 'react';

const Objects = () => {
    
    const [car, setCar] = useState({year:2024, make:"Toyota", model:"Land Cruiser"});

    
    const handleYearChange = (event) => {
        setCar(c => ({...car, year: event.target.value}) )
    }
    const handleMakeChange = (event) => {
        setCar(c=> ({...car, make: event.target.value}))
    }
    const handleModelChange = (event) => {
        setCar(c=> ({...car, model: event.target.value}))
    }
 
    return (
        <div>
            <h2>Car Details</h2>
            <p>My Dream car is a {car.year} {car.make} {car.model} </p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br />

        
        </div>
    )
}

export default Objects;
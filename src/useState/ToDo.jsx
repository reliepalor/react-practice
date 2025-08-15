import {useState} from 'react';

const ToDo = () => {

    const [cars,setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carBrand, setCarBrand] = useState();
    const [carModel,setCarModel] = useState();
    const [tasks, setTasks] = useState([]);

    const handleAddCar = () => {
        if (!carYear || !carBrand || !carModel){
            alert('Please fill in all fields');
        }else{
            const newCar = {
            year: carYear,
            brand: carBrand,
            model: carModel,
            done: false
        }

        setCars(c=> [...cars, newCar]);

        setCarYear(new Date().getFullYear());
        setCarBrand("");
        setCarModel("");
        }

    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index));
    }

    const handleTaskDone = (index) => {
        const updatedCars = cars.map((car, i) =>
            i === index ? { ...car, done: !car.done } : car
        );
        setCars(updatedCars);
    };

    const handleYearChange = (e) => {
        setCarYear(e.target.value);
    }
    const handleBrandChange = (e) => {
        setCarBrand(e.target.value);
    }
    const handleModelChange = (e) => {
        setCarModel(e.target.value);
    }
    return (
        <div>
            <h1>Car List</h1>
            <ul>
                {cars.map((car, index) => <li key={index}
                                            onClick={() => handleTaskDone(index)}
                                            style={{cursor:'pointer', textDecoration: car.done ? 'line-through' : 'none'}}>
                                        {car.year} {car.brand} {car.model}
                                        <button onClick={() => handleRemoveCar(index)}>remove</button>
                                        </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carBrand} onChange={handleBrandChange} placeholder='enter car brand'/><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='enter car model'/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    ) 
}

export default ToDo;
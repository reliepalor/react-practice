import {useState} from 'react';

const Arrays = () => {
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear()); 
    const [carMake, setCarMake] = useState();
    const [carModel, setCarModel] = useState();
   
    const handleAddCar = () => {

        const newCar = {year: carYear, make: carMake, model: carModel};

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i  ) => i !== index));
    }
    const handleYearChange = (event) => {
        setCarYear(event.target.value);
    }
    const handleMakeChange = (event) => {
        setCarMake(event.target.value);
    }
    const handleModelChange = (event) => {
        setCarModel(event.target.value);
    }

    return (
    <div>
        <h2>List of Cars</h2>

        <ul>
            {cars.map((car, index) => 
                    <li key={index}
                        >
                        {car.year} {car.make} {car.model}
                        <button onClick={() => handleRemoveCar(index)}>❌</button>
                    </li>)}
        </ul>

        <input type="number" value={carYear} onChange={handleYearChange} placeholder='enter year'/><br />
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder='enter make'/><br />
        <input type="text" value={carModel} onChange={handleModelChange} placeholder='enter model'/><br />

        <button onClick={handleAddCar}>add car</button>
    </div>
   )
}


export default Arrays;
import React, { useEffect, useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    return (
        <div className='color-picker-con'>
            <h2>Color Picker</h2>
           
           <div>
            <input type="color" value={color} onChange={handleColorChange}/>
            <label className='color-label' htmlFor="">Select a color:</label>
           </div>
            
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            
        </div>
    )
}

export default ColorPicker;
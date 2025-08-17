import React from 'react';
import {useState, useEffect} from 'react';
import DigitalClock from './DigitalClock';
const Component1 = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Added Event Listener");

        return () => {
            window.removeEventListener("resize",handleResize);
            console.log("Removed Event Listener")
        } 
    }, []);

    useEffect(() => {
        document.title = `w:${width}px | h:${height}px;`
    }, [width,height])

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
  return (
    <div>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p> <br /> <hr />

        <DigitalClock />
    </div>
  )
}

export default Component1;

import React from 'react';
import {useState, useEffect} from 'react';
import DigitalClock from './DigitalClock';
import ComponentA from './ComponentA';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';
import ComponentB from './ComponentB';
import Fetch from './Fetch';
import UseReference from './UseReference';
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

        <DigitalClock /> <br /><hr />
        <h2 className='text-3xl'>useContext</h2>
        <div className='flex justify-center items-center flex-col gap-2'>
        <ComponentA/>
        <hr />
        useEffect
        <Fetch/>
        <div className='border w-full'/>
        <UseReference />
        </div>
        

    </div>
  )
}

export default Component1;

import React from 'react'
import {useState, useEffect} from 'react';
import Sunset from '../assets/images/sunset.jpg'

const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return() => {
            clearInterval(intervalId);
        }
    }, []);

    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meridiem}`;
    }
    
    const addZero = (number) => {
        return (number < 10 ? "0" : "") + number;
    }
  return (
    <div>
      <div className='w-full flex justify-center items-center flex-col'>
            <img src={Sunset} alt="" className=''/>  
            <div className='relative top-[-13rem] w-full bg-white/30 shadow-lg p-10 rounded-lg w-[70%]'>
                <p className='sm:text-xl md:text-md lg:text-7xl text-center font-bold text-gray-800 duration-500 ease-in-out'>Digital Clock</p>
                <p className='mt-5 sm:text-xl md:text-md lg:text-7xl text-center font-bold text-gray-800 duration-500 ease-in-out'>{formatTime()}</p>
            </div>
       </div>
 
    </div>

  )
}

export default DigitalClock

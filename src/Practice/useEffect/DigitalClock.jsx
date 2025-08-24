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
        <div className="w-full flex flex-col items-center justify-center relative">
        {/* Background Image */}
        <img src={Sunset} alt="Sunset" className="w-full h-auto object-cover" />

        {/* Overlay Card */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/30 shadow-lg p-6 sm:p-8 md:p-10 rounded-2xl w-[90%] sm:w-[80%] md:w-[70%] max-w-3xl">
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold text-gray-800 transition duration-500 ease-in-out">
                Digital Clock
            </p>
            <p className="mt-5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold text-gray-800 transition duration-500 ease-in-out">
                {formatTime()}
            </p>
            </div>
        </div>
        </div>

 
    </div>

  )
}

export default DigitalClock

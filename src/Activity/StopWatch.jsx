import React, {useState, useEffect, useRef} from 'react'

const StopWatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning, elapsedTime]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
        startTimeRef.current = 0;
    }

    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds = Math.floor((elapsedTime / 10) % 100);
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(2, '0');

        return `${minutes}:${seconds}:${milliseconds}`
    }

    return(
        <div className='border border-gray-400 p-5 my-2 font-mono'>
            <div className='p-5 text-8xl hover:scale-105 duration-200 ease-in-out text-center cursor-pointer'>{formatTime()}</div>
            <button className='mx-2 bg-green-400 hover:bg-green-500 duration-200  text-green-950 hover:scale-105  ease-in-out text-center cursor-pointer' onClick={start} >Start</button>
            <button className='mx-2 bg-gray-400 hover:bg-gray-500 duration-200  text-gray-950 hover:scale-105 ease-in-out text-center cursor-pointer' onClick={reset} >Reset</button>
            <button className='mx-2 bg-red-400 hover:bg-red-500 duration-200  text-red-900 hover:scale-105  ease-in-out text-center cursor-pointer' onClick={stop}> Stop</button>

        </div>
    )
}

export default StopWatch

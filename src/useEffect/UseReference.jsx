import React from 'react'
import {useState, useEffect, useRef} from 'react';


const UseReference = () => {

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(() => {
        console.log("ref Rendered")

    })

    const handleClick1 = () => {
       inputRef1.current.focus();
       inputRef1.current.style.backgroundColor = "gray";
       inputRef2.current.style.backgroundColor = "";
       inputRef3.current.style.backgroundColor = "";
    }
    const handleClick2 = () => {
       inputRef2.current.focus();
       inputRef1.current.style.backgroundColor = "";
       inputRef2.current.style.backgroundColor = "gray";
       inputRef3.current.style.backgroundColor = "";
    }
    const handleClick3 = () => {
       inputRef3.current.focus();
       inputRef1.current.style.backgroundColor = "";
       inputRef2.current.style.backgroundColor = "";
       inputRef3.current.style.backgroundColor = "gray";

    }
    
  return (
    <div>
      <h2>useRef</h2>
      <button onClick={handleClick1}>click me1!</button>
      <input type="text" ref={inputRef1}/><br />

      <button onClick={handleClick2}>click me2!</button>
      <input type="text" ref={inputRef2}/><br />

      <button onClick={handleClick3}>click me3!</button>
      <input type="text" ref={inputRef3}/>
    </div>
  )
}

export default UseReference

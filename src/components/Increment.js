import React from 'react';
import { useState } from 'react';


export default function Increment(props) {
    const [counter, setCounter] = useState(0);
  
    function handleButtonClick() {
        return props.mode === "Increment" ? setCounter(counter + 1) : setCounter(counter - 1)
    }
  
    return (
    <>
        <h3>{props.mode} counter</h3>
        <p>{counter} times</p>
        <button className="btn" onClick={handleButtonClick}>{props.mode}</button>
    </>
    );
  }
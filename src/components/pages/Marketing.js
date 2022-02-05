import React, { useState, useEffect } from 'react';
import '../../App.css';

export default function Clock() {

  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const intervalId = setInterval(()=>{
        setDate(new Date())
    },1000)
    return () => {
      clearInterval(intervalId);
    }
  },[])
  return <h1>{date.toLocaleTimeString()}</h1>

}

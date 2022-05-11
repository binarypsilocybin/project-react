import React, { useState, useEffect } from "react";
import "../../App.css";

export default function Clocks() {
  function Clock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setDate(new Date());
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);

    return (
      <>
        <h1>{date.toLocaleTimeString()}</h1>
      </>
    );
  }

  function StopWatch() {
    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
      if (running) {
        const timerId = setTimeout(() => {
          setCounter((prevCounter) => prevCounter + 1);
        }, 1000);
        return () => {
          clearTimeout(timerId);
        };
      }
    });
    function handleToggleClick() {
      setRunning((prevRunning) => !prevRunning);
    }
    function handleStopClick() {
      setCounter(0);
      setRunning(false);
    }
    return (
      <>
        <h2>{counter}</h2>
        <button onClick={handleToggleClick}>Start / Pause</button>
        <button onClick={handleStopClick}>Stop</button>
      </>
    );
  }

  return (
    <section className="clock-project">
      <div className="wrapper">
        <Clock />
        <StopWatch />
      </div>
    </section>
  );
}

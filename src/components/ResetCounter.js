import React from "react";
import { useState } from "react";

export default function ResetCount() {
  const [seconds, setSeconds] = useState(0);

  function handleIncrementClick() {
    if (seconds === 15) {
      setSeconds(0);
    } else {
      setSeconds(seconds + 1);
    }
  }

  return (
    <>
      <h3>Reset counter</h3>
      <p>{seconds} counter</p>
      <button className="btn" onClick={handleIncrementClick}>
        Add 1
      </button>
    </>
  );
}

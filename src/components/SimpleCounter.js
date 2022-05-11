import React from "react";
import { useState } from "react";

export default function SimpleCounter(props) {
  const [counter, setCounter] = useState(0);
  const { incrementBy } = props;

  function handleIncrementClick() {
    setCounter(counter + incrementBy);
  }

  return (
    <>
      <h3>{props.mode}Simple counter</h3>
      <p>{counter} times clicked</p>
      <button className="btn" onClick={handleIncrementClick}>
        Add {incrementBy}
      </button>
    </>
  );
}

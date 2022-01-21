import React from 'react';
import { useState } from 'react';


export default function DisableButton(){
    const[count, setCount] = useState(5);
    function handleDisableClick(){
        if(count > 0) {
            setCount(count -1)
        }
    }
    return (<>
        <h3>Disable button</h3> 
        <p>{count} times remaining</p>
        <button className="btn" disabled={count === 0} onClick={handleDisableClick}>Countdown</button>
    </>)
}
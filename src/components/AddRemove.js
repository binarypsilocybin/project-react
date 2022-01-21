import React, {useState} from "react";
import {render} from "react-dom";


export default function OrderInsurance(){
    const [order, setOrder] = useState({
        id: 1,
        items: [1,10,20]
    })

    function handleIncrementClick(){
        setOrder({
            ...order, insurance: "basic"
        })
    }
    function handleDecrementClick(){
        const {insurance,...modifiedOrder} = order;
        setOrder(modifiedOrder)

    }

    return <div>
        <h3>Your order</h3>
        {order.insurance ?<p>Order is insured</p> : <p>Order is not insured</p>}
        <button className="btn" disabled={order.insurance === "basic"} onClick={handleIncrementClick}>Add insurance</button>
        <button className="btn" disabled={order.insurance === undefined } onClick={handleDecrementClick}>Add insurance</button>
    </div>

}
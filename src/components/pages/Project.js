import React from 'react';
import '../../App.css';

import '../../components/Product.css';


import {useState} from "react";
import StoreFront from "../StoreFront";


export default function Project() {
 

 const [loggedIn, setLoggedIn] = useState(false);
    if(loggedIn){
        return <>
        <section className="project">
            <div className="wrapper">

            <StoreFront />
            <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button> 
            </div>
        </section>
        </>
    }else {
    return <>
    <section className="project">
        <div className="wrapper">
        <h2>Please login</h2>
        <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
        </div>
    </section>
    </>

    }



}

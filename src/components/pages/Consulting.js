import React, { useState, useEffect, useLayoutEffect } from 'react';
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"
import '../../App.css';


export default function StoresMap() {
  
  function App() {
    const [random, setRandom] = useState(Math.random());

      mapboxgl.accessToken = "pk.eyJ1IjoiYmluYXJ5cHNpbG9jeWJvbiIsImEiOiJja2p6eTVicjAwYnk5MnhydWV2ZnViZjloIn0.RfJVq5ViwYCYDKdFFE6uCg";

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // matches <div id="map" />
            style: 'mapbox://styles/mapbox/dark-v10', // sets the dark mode
            center: [ -9.13200, 38.72271 ], // Sets the center of the map (long, lat)
            zoom: 6
        });

    },[])

      return <>
        <button id="re-render" onClick={() => setRandom(Math.random())}>Re-render</button>
        <div id="map"></div>
    </>;
}
 

  return (

    <section className="another-project">
      <div className="wrapper">
        <App />    
      </div>
    </section>
  
    )




}


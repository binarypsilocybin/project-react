import React, { useState, useEffect, useLayoutEffect } from 'react';
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"
import '../../App.css';


export default function StoresMap() {
  
  function App() {
    const [marker, setMarker] = useState();

    mapboxgl.accessToken = "pk.eyJ1IjoiYmluYXJ5cHNpbG9jeWJvbiIsImEiOiJja2p6eTVicjAwYnk5MnhydWV2ZnViZjloIn0.RfJVq5ViwYCYDKdFFE6uCg";

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // matches <div id="map" />
            style: 'mapbox://styles/mapbox/dark-v10', // sets the dark mode
            center:  [ 12.567898, 55.67583 ],
            zoom: 9
        });

        const mapMarker = new mapboxgl.Marker()
        .setLngLat([12.567898, 55.67583])
        .addTo(map);
        setMarker(mapMarker);


    },[])
    const stores = {
      central: [12.567898, 55.67583],
      norrebro: [12.553806, 55.699299],
      airport: [12.650784, 55.618042]
  }

    function handleStoreChange(event) {
      const location = event.target.value;
      marker.setLngLat(stores[location]);
  }


  return <>
  <div className="map-overlay">
      <h3>Choose store: </h3>
      <select onChange={handleStoreChange}>
          <option value="central">Central station</option>
          <option value="norrebro">Norrebro street</option>
          <option value="airport">CPH Airport</option>
      </select>
  </div>
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


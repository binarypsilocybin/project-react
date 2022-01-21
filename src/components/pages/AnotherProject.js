import React from 'react';
import '../../App.css';
import { useState } from 'react';


export default function AnotherProject() {
  
  function Checkout(props) {

    function handleNameChange(event){
        console.log(event.target.value)
    }

    return <form>
    <input name="name" onChange={handleNameChange}/>
    </form>;
  }
  function ControledComponent(){
    const [name, setName] = useState("Default")
    return <>
      <input type="text" name="name" value={name} onChange={event => setName(event.target.value)}/>
      <p>Hello {name}</p>

    </>
  }

  function ControledComponentNumber(){
      const [number, setNumber] = useState(0)
      return <>
        <input type="number" name="quantity" value={number} onChange={event => setNumber(event.target.value)} />
        <p>Ordering {number} items</p>
      </>
  }
  
  return (

  <section className="another-project">
    <div className="wrapper">
    <h1>Forms</h1>
    <p>Get input text</p>
    <Checkout />


    <h1>Forms</h1>
    <ControledComponent />
    <h1>Form number</h1>
    <ControledComponentNumber />




    </div>
  </section>

  )

}

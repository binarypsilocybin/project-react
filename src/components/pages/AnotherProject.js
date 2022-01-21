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

  function RegisterForm(){
    const[name, setName] = useState("");
    const[type, setType] = useState("");
    const[motivation, setMotivation] = useState("");
  

  function handleFormSubmit(event){
    event.preventDefault();
    setName("");
    setType("");
    setMotivation("");
  }
  return <>
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
      <select name="type" value={type} onChange={e => setType(e.target.value)}>
          <option>Choose a type</option>
          <option>Client</option>
          <option>Merchant</option>
      </select>
      <textarea name="motivation" value={motivation} onChange={e => setMotivation(e.target.value)} placeholder="Your motivation to join"/>
      <input type="submit" value="Register" />
    </form>
    <p>
      Your name is {name}. You would like to register as {type} because {motivation}.
    </p>
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
    
    <h1>Submit form</h1>
    <RegisterForm />


    </div>
  </section>

  )

}

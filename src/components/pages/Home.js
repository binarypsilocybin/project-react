import React from 'react';
import '../../App.css';
import Increment from '../Increment';
import SimpleCounter from '../SimpleCounter';
import ResetCounter from '../ResetCounter';
import DisableButton  from '../DisableButton';
import DarkMode  from '../DarkMode';
import AddRemove  from '../AddRemove';


export default function Home() {
  return (
    <>
      <section className='home'>
       
        <div className="wrapper">
        <h2>Conditional State Change: Props</h2>
        <div>
        <Increment mode="Increment" />
        <Increment mode="Decrement" />
        <SimpleCounter incrementBy={1} />
        <SimpleCounter incrementBy={2} />
        <SimpleCounter incrementBy={5} />
        <ResetCounter />
        <DisableButton />
        <DarkMode />
        <AddRemove />
        </div>

        </div>
      </section>
    </>
  );
}












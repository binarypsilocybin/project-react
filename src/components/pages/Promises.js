import React from 'react';
import ShoppingWallet from '../ShoppingWallet';
import Wallet from '../Wallet';
import TodoApp from '../TodoApp';

export default function Promises() {

  return (
    <section className="another-project">
      <div className="wrapper">
       <ShoppingWallet />
       <Wallet />
       <h1>Todo App</h1>
       <TodoApp />
      </div>
    </section>  
    )

}
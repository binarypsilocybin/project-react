import React from "react";
import { useState } from "react";

export default function ShoppingWallet() {
  const [transactions, setTransactions] = useState([]);
  function handleDepositClick() {
    setTransactions([...transactions, 10]);
  }
  function handleWithdrawClick() {
    setTransactions([...transactions, -10]);
  }

  function handleClearClick() {
    setTransactions([]);
  }

  const sum = transactions.reduce((total, current) => total + current, 0);

  return (
    <>
      <button onClick={handleDepositClick}>Deposit 10</button>
      <button onClick={handleWithdrawClick}>Withdraw 10</button>
      <h2>Total:{sum}</h2>
      <button onClick={handleClearClick}>Reset</button>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={transaction}>{transaction}</li>
        ))}
      </ul>
    </>
  );
}

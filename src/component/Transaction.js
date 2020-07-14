import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const {deleteTransaction} = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? "-" : "+";
  const plusOrMinus = transaction.amount < 0 ? "minus" : "plus";
  const id = transaction.id
  return (
    <li className={plusOrMinus}>
      <span>{transaction.text}</span>
      <span>
        {sign}£{Math.abs(transaction.amount)}
      </span>
      <button onClick={()=>deleteTransaction(id)}>x</button>
    </li>
  );
};

export default Transaction;

import React from "react";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const plusOrMinus = transaction.amount < 0 ? "minus" : "plus";
  return (
    <li className={plusOrMinus}>
      <span>{transaction.text}</span>
      <span>
        {sign}£{Math.abs(transaction.amount)}
      </span>
      <button>x</button>
    </li>
  );
};

export default Transaction;

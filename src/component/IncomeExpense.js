import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  console.log(expense);
  

  return (
    <div className="income-expense-container">
      <div className="income">
        <p>Income</p>
        <p>+£{income}</p>
      </div>
      <div className="expense">
        <p>Expense</p>
        <p>-£{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;

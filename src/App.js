import { useState } from "react";
import Form from "./components/form";
import Header from "./components/header";
import "./global.css";
import ExpenseList from "./components/expenseList";
const title = "Project 01 - Expense Tracker";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const getExpense = (data) => {
    console.log(data, "getExpense");
    setExpenses([
      { ...data, id: Math.round(Math.random() * 9999) },
      ...expenses,
    ]);
  };

  return (
    <>
      <Header title={title} />
      <Form getExpense={getExpense} />
      {/* Filter */}
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default App;

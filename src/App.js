import React, { useState } from "react";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import TodoApp from "./TodoApp";
import UseCounter from "./hooks/UseCounter";
import ForwardCounting from "./customHooks/ForwardCounting";
import BackwardCounting from "./customHooks/BackwardCounting";
const App = () => {
  return (
    <React.Fragment>
      <ForwardCounting />
      <BackwardCounting />
    </React.Fragment>
  );
};

export default App;

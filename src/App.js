import React, { useState } from "react";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import TodoApp from "./TodoApp";
import UseCounter from "./hooks/UseCounter";
import ForwardCounting from "./customHooks/ForwardCounting";
import BackwardCounting from "./customHooks/BackwardCounting";
import FetchData from "./FetchData";
import Practice from "./Practice";
const App = () => {
  return (
    <div>
      <Practice />
    </div>
  );
};

export default App;

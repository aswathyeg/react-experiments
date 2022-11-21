import React, { useState } from "react";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import TodoApp from "./TodoApp";
import UseCounter from "./hooks/UseCounter";
import ForwardCounting from "./customHooks/ForwardCounting";
import BackwardCounting from "./customHooks/BackwardCounting";
import FetchData from "./FetchData";
import LifeCycleMethods from "./LifeCycleMethods";
import RemoveElement from "./RemoveElement";
const App = () => {
  return (
    <div>
      {/* <LifeCycleMethods /> */}
      <RemoveElement />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import TodoApp from "./TodoApp";
import UseCounter from "./hooks/UseCounter";
import ForwardCounting from "./customHooks/ForwardCounting";
import BackwardCounting from "./customHooks/BackwardCounting";
import FetchData from "./FetchData";
import LifeCycleMethods from "./LifeCycleMethods";
import RemoveElement from "./RemoveElement";
import ChildToParent from "./passingData/ChildToParent";
import CheckboxExample from "./CheckboxExample";
const App = () => {
  // const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div>
      {/* <Folder explore={explorerData} /> */}
      {/* <LifeCycleMethods /> */}
      {/* <RemoveElement /> */}
      <CheckboxExample label="Subscribe?" />
    </div>
  );
};

export default App;

import React, { useState } from "react";

const AddMe = () => {
  let [count, setCount] = useState(0);
  let onAdd = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onAdd}>Add</button>
      <p>{count}</p>
    </div>
  );
};

export default AddMe;

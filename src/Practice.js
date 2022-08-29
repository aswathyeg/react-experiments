import React, { useState } from "react";
const Practice = () => {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <div>
      <input placeholder="search here" type="text" onChange={handleChange} />
      <p>Search Result : {state}</p>
    </div>
  );
};
export default Practice;

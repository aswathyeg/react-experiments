import React, { useEffect, useState } from "react";
const Practice = () => {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    setState(e.target.value);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {}, 1000);
    return () => clearTimeout(timeoutId);
  }, [state]);
  return (
    <div>
      <input
        placeholder="search here"
        type="text"
        value={state}
        onChange={handleChange}
      />
      <p>Search Result : {state}</p>
    </div>
  );
};
export default Practice;

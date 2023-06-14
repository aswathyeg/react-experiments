import React from "react";
import { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <h1>rendered{count} times</h1>
    </div>
  );
};
export default Effect;

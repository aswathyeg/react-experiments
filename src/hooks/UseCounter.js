//custom hook
import { useState, useEffect } from "react";

const UseCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevState) => prevState + 1);
      } else {
        setCounter((prevState) => prevState - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [forwards]);
  return counter;
};
export default UseCounter;

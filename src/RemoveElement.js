import React, { useState } from "react";

const RemoveElement = () => {
  let [visible, setVisible] = useState(true);

  const handleRemove = () => {
    // setVisible((prev) => !prev);

    setVisible(!visible);
  };
  return <div>{visible && <button onClick={handleRemove}>Remove</button>}</div>;
};

export default RemoveElement;

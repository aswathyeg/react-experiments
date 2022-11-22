import React, { useState } from "react";

const RemoveElement = () => {
  let [visible, setVisible] = useState(true);
  let [fruits, setFruits] = useState(["Banana", "orange", "apple"]);

  const handleRemove = () => {
    // setVisible((prev) => !prev);

    setVisible(!visible);
  };
  const handleItems = (index) => {
    const newItems = fruits.filter((_, c) => c !== index);
    setFruits(newItems);
  };
  return (
    <div>
      {visible && <button onClick={handleRemove}>Remove</button>}
      <br></br>
      {fruits.map((items, index) => {
        return (
          <ul key={index}>
            <li onClick={() => handleItems(index)}>{items}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default RemoveElement;

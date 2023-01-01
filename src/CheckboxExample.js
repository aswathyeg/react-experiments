import React, { useState } from "react";

const CheckboxExample = ({ label }) => {
  const [checked, setChecked] = useState(false);
  const handleClick = (e) => {
    // e.preventDefault();
    setChecked(true);
  };
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkBox"
          onChange={() => {
            handleClick();
          }}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CheckboxExample;

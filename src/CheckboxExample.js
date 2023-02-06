import React, { useState } from "react";
const CheckboxExample = ({ label, checked, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = (e) => {
    // e.preventDefault();
    setIsChecked(true);
  };
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          {...props}
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

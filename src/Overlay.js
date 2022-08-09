import { useState } from "react";
import classes from "./Overlay.module.css";

const Overlay = (props) => {
  const handleConfirm = () => {
    props.onCancel();
  };

  return (
    <div className={classes.Overlay}>
      <h1>Are you sure?</h1>
      <button onClick={handleConfirm}>Cancel</button>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};
export default Overlay;

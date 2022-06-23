import { useState } from "react";
import classes from "./Overlay.module.css";

const Overlay = (props) => {
  const [confirmState, setConfirmState] = useState(false);
  const handleConfirm = () => {
    setConfirmState(true);
  };
  return (
    <div className={classes.Overlay}>
      <h1>Are you sure?</h1>
      <button>Cancel</button>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};
export default Overlay;

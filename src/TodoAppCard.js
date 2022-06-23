import BackDrop from "./BackDrop";
import { useState } from "react";
import Overlay from "./Overlay";
import classes from "./TodoApp.module.css";

const TodoAppCard = (props) => {
  const [state, setState] = useState(false);

  const handleDelete = () => {
    setState(true);
  };
  const handleCancel = () => {
    setState(false);
  };

  return (
    <div className={classes.card}>
      <h1>{props.text}</h1>

      <div className={classes.deleteButton}>
        <button onClick={handleDelete}>Delete</button>
        {state == true && <Overlay />}
        {state == true && <BackDrop onCancel={handleCancel} />}
      </div>
    </div>
  );
};
export default TodoAppCard;

import classes from "./TodoApp.module.css";
const TodoAppCard = (props) => {
  const handleDelete = () => {};
  return (
    <div className={classes.card}>
      <h1>{props.text}</h1>

      <div className={classes.deleteButton}>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
export default TodoAppCard;

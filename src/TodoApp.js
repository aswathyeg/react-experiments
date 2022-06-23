import classes from "./TodoApp.module.css";
import TodoAppCard from "./TodoAppCard";
const TodoApp = (props) => {
  return (
    <div className={classes.appBody}>
      <TodoAppCard text="Learn React" />
      <TodoAppCard text="Learn JavaScript" />
    </div>
  );
};
export default TodoApp;

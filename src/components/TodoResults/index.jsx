import "./styles.css";
import { useSelector } from "react-redux";
import { getTodos } from "features/todo/todoSlices";

const TodoResults = () => {
  const done = useSelector(getTodos);
  const doneCount = done.filter((todo) => todo.checked).length;

  return <div className="todo-results">{`Done: ${doneCount}`}</div>;
};

export default TodoResults;

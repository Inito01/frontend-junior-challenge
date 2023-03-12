import "./styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoToApi } from "features/asyncThunks";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  if (value && isDisabled) {
    setIsDisabled(false);
  } else if (!value && !isDisabled) {
    setIsDisabled(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(
        addTodoToApi({
          label: value,
        })
      );
    }
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-todo">
      <input
        type="text"
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter new to do"
        className="form-todo-input"
      />
      <button type="submit" className="form-todo-button">
        {isDisabled ? "Write something" : "Add to do"}
      </button>
    </form>
  );
};

export default TodoForm;

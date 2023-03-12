import "./styles.css";
import TodoListItem from "components/TodoListItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodosFromApi,
  updateTodoToApi,
  deleteTodoFromApi,
} from "features/asyncThunks";
import { getTodos } from "features/todo/todoSlices";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  useEffect(() => {
    dispatch(fetchTodosFromApi());
  }, [dispatch]);

  // eslint-disable-next-line
  const handleDelete = (todoId) => {
    dispatch(deleteTodoFromApi({ id: todoId }));
  };
  // eslint-disable-next-line
  const toggleCheck = (todoId, isChecked) => {
    dispatch(updateTodoToApi({ id: todoId, checked: isChecked }));
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            label={todo.label}
            checked={todo.checked}
            onCheck={() => toggleCheck(todo.id, todo.isChecked)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>
      <div className="no-todos">
        {todos.length === 0 && (
          <span>Looks like you&apos;re absolutely free today!</span>
        )}
      </div>
    </div>
  );
};

export default TodoList;

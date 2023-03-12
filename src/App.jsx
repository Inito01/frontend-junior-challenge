import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import TodoForm from "components/TodoForm";
import { ToastContainer } from "react-toastify";
import { useHandleError } from "features/errorHandlers/useHandleError";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const { toastDisplay, status } = useHandleError();

  if (status !== null) toastDisplay(status);

  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm />
      <ToastContainer />
    </div>
  );
};

export default App;

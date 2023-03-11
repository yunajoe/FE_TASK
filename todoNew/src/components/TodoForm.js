import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";

function TodoForm() {
  const { addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!todoItem) {
      return;
    }
    addTodo(todoItem);
    setTodoItem("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {/* <h2>Numer of todo : {getNumberofTodoItems()}</h2> */}
      <input
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;

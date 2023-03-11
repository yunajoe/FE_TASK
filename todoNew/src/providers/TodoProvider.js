import { createContext, useState, useContext } from "react";
// todoList를 todetail component에
import TodoDetail from "../components/TodoDetail";

const TodoContext = createContext();

const initialTodoListState = [""];

// { children }
const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialTodoListState);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    console.log(newTodo);
  };

  const removeTodo = (todoIndex) => {
    const newList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newList);
  };

  const editTodo = (todoIndex, newTodo) => {
    const newList = todoList.map((v, index) =>
      index === todoIndex ? newTodo : v
    );
  };

  const contextValue = {
    todoList,
    addTodo,
    removeTodo,
    editTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;

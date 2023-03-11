import { useTodoContext } from "../providers/TodoProvider";
import React, { useContext } from "react";

function TodoDetail() {
  const { todoList, removeTodo, editTodo } = useTodoContext();

  return (
    <>
      {todoList.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>삭제하기</button>;
          <button onClick={() => editTodo(index)}>수정하기</button>
        </li>
      ))}
    </>
  );
}

export default TodoDetail;

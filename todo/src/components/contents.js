// src/components/contents.js
// https://simplereact.gitbook.io/simplereact/09.-todo-app-delete
import React from "react";
import { Link } from "react-router-dom";
import Detail from "../Pages/Detail";

function Todo({ todo: { id, text, isDone } }) {
  return (
    <div>
      {/* <input type="checkbox" checked={isDone} /> */}
      <buttton>
        <span>{text}</span>
        <Link to="/Detail">상세보기</Link>
      </buttton>
    </div>
  );
}

function Contents({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default Contents;

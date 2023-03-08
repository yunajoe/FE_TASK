import Header from "./components/header";
import Contents from "./components/contents";
import Footer from "./components/footer";
import React, { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([]);

  const AddTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        isDone: false,
      },
    ]);
  };
  // onChange인데 onchage로 해서 error가 났당
  return (
    <TodoTemplate>
      <Header onChange={AddTodo} />
      <Contents todos={todos} />
    </TodoTemplate>
  );
}

export default App;

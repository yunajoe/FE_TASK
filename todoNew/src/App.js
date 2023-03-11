import TodoProvider from "./providers/TodoProvider";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoDetail from "./components/TodoDetail";

function App() {
  return (
    <TodoProvider>
      <route path="/">
        <TodoForm />
        <TodoList />
      </route>
      <route path="detail" element={TodoDetail}>
        {/* <TodoDetail /> */}
      </route>
    </TodoProvider>
  );
}
export default App;

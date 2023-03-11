// 버튼으로 onClick 하여서 다른 compoenent 보여주기
import { useTodoContext } from "../providers/TodoProvider";

// import TodoDetail from "./TodoDetail";
function TodoList() {
  const { todoList } = useTodoContext();
  console.log(todoList);
  return (
    <div class="toDoList">
      <ul>
        {/* <BrowserRouter> */}
        {/* <Route path="/todoDetail" component={TodoDetail} /> */}
        {/* <Link to={"/todoDetail"}> */}
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* 버튼클릭시 component보여주기 */}
            {/* <Route path="/todoDetail" component={TodoDetail} /> */}
            <button>상세이동</button>
            {/* <button onClick={() => removeTodo(index)}>삭제하기</button>;
            <button onClick={() => editTodo(index)}>수정하기</button> */}
          </li>
        ))}
        {/* </Link>
        </BrowserRouter> */}
      </ul>
    </div>
  );
}

export default TodoList;

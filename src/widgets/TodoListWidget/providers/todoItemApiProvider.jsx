import {TodoApiItem} from "../components/TodoApiItem.jsx";

export  const todoItemApiProvider = (todo, deleteTodoHandler, toggleTodoCompletedHandler) => {
  return <TodoApiItem item={todo} deleteTodoHandler={deleteTodoHandler} toggleTodoCompletedHandler={toggleTodoCompletedHandler}/>
}
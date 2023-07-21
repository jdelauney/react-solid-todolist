import {TodoApiItem} from "../components/TodoApiItem.jsx";

export  const todoApiItemProvider = (todo, deleteTodoHandler, toggleTodoCompletedHandler) => {
  return <TodoApiItem item={todo} deleteTodoHandler={deleteTodoHandler} toggleTodoCompletedHandler={toggleTodoCompletedHandler}/>
}
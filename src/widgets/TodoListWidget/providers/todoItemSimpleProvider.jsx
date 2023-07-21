import {TodoItem} from "../components/TodoItem.jsx";

export  const todoItemSimpleProvider = (todo, deleteTodoHandler, toggleTodoCompletedHandler) => {
  return <TodoItem item={todo} deleteTodoHandler={deleteTodoHandler} toggleTodoCompletedHandler={toggleTodoCompletedHandler}/>
}
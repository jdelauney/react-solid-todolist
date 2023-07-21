import {TodoItemExt} from "../components/TodoItemExt.jsx";

export  const todoItemExtProvider = (todo, deleteTodoHandler, toggleTodoCompletedHandler) => {
  return <TodoItemExt item={todo} deleteTodoHandler={deleteTodoHandler} toggleTodoCompletedHandler={toggleTodoCompletedHandler}/>
}
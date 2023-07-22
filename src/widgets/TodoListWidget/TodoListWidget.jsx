import {useEffect, useState} from "react";
import {TodoListAddForm} from "./components/TodoAddForm.jsx";
import {TodoListItems} from "./components/TodoListItems.jsx";

export const TodoListWidget = ({ title, fetchCallback, todoFactory, customListItemProvider }) => {
  const [todos, setTodos] = useState(null)

  const fetchTodos = async () => {
    return await fetchCallback();
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggleCompleted = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    }))
  }

  useEffect(() => {
    fetchTodos().then(data => {
      setTodos(data);
    });
  }, []);


  return (
    <div className={'border-2 border-slate-500 shadow-lg shadow-slate-800 p-4 text-slate-50 rounded mb-10'}>
      <h1 className="text-4xl text-slate-100 mb-4">{title}</h1>
      <hr/>
      <TodoListAddForm addTodoHandler={handleAddTodo} todoFactory={todoFactory}/>
      <hr/>
      { todos === null && <h2 className={'text-center mt-4 text-2xl'}>🌀 Chargement...</h2> }
      { todos && <TodoListItems todos={todos} deleteTodoHandler={handleDeleteTodo} toggleTodoCompletedHandler={handleToggleCompleted} customListItemProvider={customListItemProvider}/> }
    </div>
  )
}
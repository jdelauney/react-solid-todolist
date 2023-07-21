import {useState} from "react";

export const TodoListAddForm = ({ addTodoHandler, todoFactory }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleTitleChange = (e) => {
    const newTitle = e.target.value.trim();
    if (hasError && newTitle !== '') setHasError(false);
    setNewTodoTitle(newTitle)
  }

  const handleAddTodo = (e) => {
    e.preventDefault()

    if (newTodoTitle === '') {
      setHasError(true)
      return
    }
    setHasError(false)

    const newTodo = todoFactory(newTodoTitle);

    addTodoHandler(newTodo)
  }

  return (
    <div className={'mt-4'}>
      <label htmlFor="new-todo-item">Add Todo</label>
      {hasError && <p className={'text-red-500 text-sm'}>Please enter a todo title</p>}
      <div className={'flex items-center gap-1 mb-4'}>
        <input type="text" className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} placeholder="New Todo" value={newTodoTitle}
               onChange={handleTitleChange}/>
        <button className={'mt-1 py-3 px-2 bg-gray-950 text-zinc-200 rounded min-w-[115px] hover:bg-slate-600 transition-colors duration-300 ease-in-out'}
                onClick={handleAddTodo}>Add
        </button>
      </div>
    </div>
  )
}
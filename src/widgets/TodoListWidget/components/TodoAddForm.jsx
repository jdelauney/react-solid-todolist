import {useState} from "react";

export const TodoListAddForm = ({ addTodoHandler, todoFactory }) => {
  const [hasError, setHasError] = useState(false)

  const handleTitleChange = (e) => {
    const newTitle = e.target.value.trim();
    if (hasError && newTitle !== '') setHasError(false);
  }

  const handleAddTodo = (e) => {
    e.preventDefault()

    const form = e.target;
    const formData = new FormData(form);
    const newTodoTitle = formData.get('new-todo-item').trim();

    if (newTodoTitle === '') {
      setHasError(true)
      return
    }
    setHasError(false)

    const newTodo = todoFactory(newTodoTitle);

    addTodoHandler(newTodo)

    form.reset();
  }

  return (
    <form className={'mt-4'} onSubmit={handleAddTodo}>
      <label htmlFor="new-todo-item">Add Todo</label>
      {hasError && <p className={'text-red-500 text-sm'}>Please enter a todo title</p>}
      <div className={'flex items-center gap-1 mb-4'}>
        <input type="text" id={'new-todo-item'} name={'new-todo-item'}
               className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
               placeholder="New Todo"
               onChange={handleTitleChange} defaultValue={''}/>
        <button className={'mt-1 py-3 px-2 bg-gray-950 text-zinc-200 rounded min-w-[115px] hover:bg-slate-600 transition-colors duration-300 ease-in-out'}
                >Add
        </button>
      </div>
    </form>
  )
}
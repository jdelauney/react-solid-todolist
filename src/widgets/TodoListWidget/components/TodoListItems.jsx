export const TodoListItems = ({todos, deleteTodoHandler, toggleTodoCompletedHandler, customListItemProvider}) => {
  return (
    <div className={'mt-4 min-h-[48px] max-h-[240px] h-full overflow-y-auto px-2'}>
      {todos.length === 0 && <p className={'text-center'}>Aucune tâche à afficher</p>}
      {todos.length > 0 &&
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {customListItemProvider(todo, deleteTodoHandler, toggleTodoCompletedHandler)}
            </li>
          ))}
        </ul>
      }
    </div>
  )
}
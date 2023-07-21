import {TodoListWidget} from "./widgets/TodoListWidget/TodoListWidget.jsx";
import {todoItemSimpleProvider} from "./widgets/TodoListWidget/providers/todoItemSimpleProvider.jsx";
import {getData} from "./widgets/TodoListWidget/data/todoListData.js";
import {getData as getDataExt} from "./widgets/TodoListWidget/data/todoListDataExt.js";
import {getData as getDataFromApi} from "./widgets/TodoListWidget/data/todoDummyJsonData.js";
import {todoItemExtProvider} from "./widgets/TodoListWidget/providers/todoItemExtProvider.jsx";
import {todoSimpleFactory} from "./widgets/TodoListWidget/factories/todoSimpleFactory.js";
import {todoExtFactory} from "./widgets/TodoListWidget/factories/todoExtFactory.js";
import {todoApiFactory} from "./widgets/TodoListWidget/factories/todoApiFactory.js";
import {todoApiItemProvider} from "./widgets/TodoListWidget/providers/todoApiItemProvider.jsx";


function App() {

  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className={'text-4xl font-bold text-center text-zinc-200 mb-8'}>React SOLID Todo List</h1>
        <hr/>
        <TodoListWidget title="Simple" fetchCallback={getData} todoFactory={todoSimpleFactory} customListItemProvider={todoItemSimpleProvider}/>
        <TodoListWidget title="Etendu" fetchCallback={getDataExt} todoFactory={todoExtFactory} customListItemProvider={todoItemExtProvider}/>
        <TodoListWidget title="API" fetchCallback={getDataFromApi} todoFactory={todoApiFactory} customListItemProvider={todoApiItemProvider}/>
      </div>
    </div>
  )
}

export default App
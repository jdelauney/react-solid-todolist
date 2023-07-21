import {nanoid} from "nanoid";

const data =[
  {id: nanoid(8), title: 'Todo 1', completed: false, dueDate: '2024-06-27'},
  {id: nanoid(8), title: 'Todo 2', completed: false, dueDate: '2024-07-28'},
  {id: nanoid(8), title: 'Todo 3', completed: false, dueDate: '2024-08-29'},
  {id: nanoid(8), title: 'Todo 4', completed: false, dueDate: '2024-09-30'},
  {id: nanoid(8), title: 'Todo 5', completed: false, dueDate: '2024-10-31'},
]

export const getData = () => data;
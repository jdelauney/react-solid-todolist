import {nanoid} from "nanoid";

const data =[
  {id: nanoid(8), title: 'Todo 1', completed: false},
  {id: nanoid(8), title: 'Todo 2', completed: false},
  {id: nanoid(8), title: 'Todo 3', completed: false},
  {id: nanoid(8), title: 'Todo 4', completed: false},
  {id: nanoid(8), title: 'Todo 5', completed: false},
]

export const getData = () => data;
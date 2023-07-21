import {nanoid} from "nanoid";

export const todoSimpleFactory= (title) => {
  return {
    id : nanoid(8),
    title: title,
    completed: false
  };
}
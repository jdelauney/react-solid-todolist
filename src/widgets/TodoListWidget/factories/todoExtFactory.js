import {nanoid} from "nanoid";

export const todoExtFactory= (title) => {
  const now = new Date();
  now.setFullYear(now.getFullYear() + 1);
  const year = now.toLocaleString("default", { year: "numeric" });
  const month = now.toLocaleString("default", { month: "2-digit" });
  const day = now.toLocaleString("default", { day: "2-digit" });
  const dueDate = `${year}-${month}-${day}`;
  return {
    id : nanoid(8),
    title: title,
    completed: false,
    dueDate: dueDate
  };
}
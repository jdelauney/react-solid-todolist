const url = 'https://dummyjson.com/todos';

export const getData = async (signal) => {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonData = await response.json();

  return [...jsonData.todos];
}
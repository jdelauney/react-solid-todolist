const url = 'https://dummyjson.com/todos';

export const getData = async () => {
  const abortController = new AbortController();
  const response = await fetch(url, { signal: abortController.signal });
  const jsonData = await response.json();
  return [...jsonData.todos];
}
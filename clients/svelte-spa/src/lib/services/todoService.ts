const baseUrl = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000/";

export const fetchTodoList = async () => {
  const res = await fetch(`${baseUrl}todos`);
  return (await res.json()).message;
};

export const createTodo = async (content) => {
  const res = await fetch(`${baseUrl}todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  return (await res.json()).message;
};

export const updateTodo = async (todo) => {
  const { id, content, isDone } = todo;
  const res = await fetch(`${baseUrl}todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, isDone }),
  });

  return (await res.json()).message;
};

export const deleteTodo = async (id) => {
  const res = await fetch(`${baseUrl}todos/${id}`, {
    method: "DELETE",
  });

  return (await res.json()).message;
};

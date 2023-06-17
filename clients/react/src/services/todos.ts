import { getResponseData } from ".";
import { Todo } from "../hooks/store/constants";
import { BASE_URL } from "./constants";

export const getAllTodo = async () => {
  try {
    const res = await fetch(`${BASE_URL}/todos`);
    return getResponseData(res);
  } catch (e) {
    console.error(e);
  }
};

export const createTodo = async (content: string) => {
  try {
    const res = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
      }),
    });
    return getResponseData(res);
  } catch (e) {
    console.error(e);
  }
};

export const updateTodo = async (todo: Todo) => {
  try {
    const res = await fetch(`${BASE_URL}/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: todo.content,
        isDone: todo.isDone,
      }),
    });
    return getResponseData(res);
  } catch (e) {
    console.error(e);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const res = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE"
    });
    return getResponseData(res);
  } catch (e) {
    console.error(e);
  }
}

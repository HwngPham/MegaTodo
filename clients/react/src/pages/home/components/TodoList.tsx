import { useEffect } from "react";
import { clsx } from "clsx";
import { useStore } from "../../../hooks/store";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { fetchAllTodo, todos } = useStore();

  useEffect(() => {
    fetchAllTodo();
  }, []);

  return (
    <div className={clsx("w-full")}>
      {todos.map((e) => (
        <TodoItem todo={e} key={e.id} />
      ))}
    </div>
  );
};

import { useEffect } from "react";
import { useStore } from "../../../hooks/store";
import { TodoItem } from "./TodoItem";
import {clsx } from 'clsx'
export const TodoList = () => {
  const { fetchAllTodo, todos } = useStore();

  useEffect(() => {
    fetchAllTodo();
  }, []);

  
  return (
    <div className={clsx('w-full')}>
      {todos.map((e) => (
        <TodoItem todo={e} key={e.id} />
      ))}
    </div>
  );
};

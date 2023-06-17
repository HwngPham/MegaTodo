import { Button, Divider, useClickAway } from "@geist-ui/core";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MouseEvent, useRef, useState } from "react";
import { clsx } from "clsx";
import { TiCancel } from "react-icons/ti";
import { Todo } from "../../../hooks/store/constants";
import { UpdateTodoForm } from "./UpdateTodoForm";
import { useStore } from "../../../hooks/store";

export interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const [editingTodo, setEditingTodo] = useState<Todo | null>();
  const { updateTodo, deleteTodo } = useStore();
  const ref = useRef<any>();
  useClickAway(ref, () => {
    setEditingTodo(null);
  });

  const onClick = (e: MouseEvent<HTMLElement>, currentTodo: Todo) => {
    const isDoubleClick = e.detail === 2;

    if (isDoubleClick) {
      setEditingTodo(currentTodo);
    } else {
      updateTodo({ ...todo, isDone: !todo.isDone });
    }
  };

  const onCancel = () => setEditingTodo(null);

  if (!todo.content) return null;

  return (
    <>
      <div
        ref={ref}
        className={clsx(
          "flex",
          "justify-between",
          "w-full",
          "items-center",
          "mt-4",
          todo.isDone && "line-through"
        )}
        onClick={(e) => onClick(e, todo)}
      >
        {editingTodo ? (
          <UpdateTodoForm todo={editingTodo} setEditingTodo={setEditingTodo} />
        ) : (
          <p>{todo.content}</p>
        )}

        <div>
          {editingTodo ? (
            <Button scale={4 / 3} auto px="16px" onClick={onCancel}>
              <TiCancel />
            </Button>
          ) : (
            <Button
              scale={4 / 3}
              auto
              px="16px"
              onClick={() => deleteTodo(todo.id)}
            >
              <RiDeleteBin5Line />
            </Button>
          )}
        </div>
      </div>
      <Divider />
    </>
  );
};

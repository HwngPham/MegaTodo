import { Input } from "@geist-ui/core";
import { ChangeEvent, FormEvent, useState } from "react";
import { useStore } from "../../../hooks/store";
import { Todo } from "../../../hooks/store/constants";

export interface UpdateTodoFormProps {
  todo: Todo;
  setEditingTodo: (todo: Todo | null) => void;
}

export const UpdateTodoForm = ({
  todo,
  setEditingTodo,
}: UpdateTodoFormProps) => {
  const [input, setInput] = useState(todo.content);
  const { updateTodo } = useStore();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    await updateTodo({ ...todo, content: input });
    setEditingTodo(null);
    setInput("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value ?? "");
  };

  return (
    <form onSubmit={onSubmit}>
      <Input scale={4 / 3} value={input} onChange={onChange} className="my-2" />
    </form>
  );
};

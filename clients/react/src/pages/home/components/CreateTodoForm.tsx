import { Input } from "@geist-ui/core";
import { ChangeEvent, FormEvent, useState } from "react";
import { clsx } from "clsx";
import { useStore } from "../../../hooks/store";

export interface CreateTodoFormProps {}

export const CreateTodoForm = () => {
  const [input, setInput] = useState("");
  const { createTodo } = useStore();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    await createTodo(input);
    setInput("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value ?? "");
  };

  return (
    <form onSubmit={onSubmit} className={clsx("w-full", "m-8")}>
      <Input
        width="100%"
        scale={4 / 3}
        placeholder="Let's do something..."
        value={input}
        onChange={onChange}
      />
    </form>
  );
};

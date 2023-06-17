import { CreateTodoForm } from "./components/CreateTodoForm";
import { ProgressBar } from "./components/ProgressBar";
import { TodoList } from "./components/TodoList";
import { clsx } from "clsx";

export const PageHome = () => {
  return (
    <div
      className={clsx(
        "m-auto",
        "w-[600px]",
        "flex",
        "flex-col",
        "items-center"
      )}
    >
      <CreateTodoForm />
      <ProgressBar />
      <TodoList />
    </div>
  );
};

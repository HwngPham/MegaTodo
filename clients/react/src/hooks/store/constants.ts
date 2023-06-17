// Merging state changes instead of rewriting state
export const MERGE_STATE = false;

export type Todo = {
  id: number;
  content: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export interface StoreState {
  counter: number;
  todos: Todo[];
  increase: () => void;
  fetchAllTodo: () => Promise<void>;
  createTodo: (content: string) => Promise<void>;
  updateTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}

export interface EditableTodoFields extends Pick<Todo, "content" | "isDone"> {}

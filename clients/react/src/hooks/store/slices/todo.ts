import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "../../../services";
import {
  EditableTodoFields,
  MERGE_STATE,
  StoreState,
  Todo,
} from "../constants";

const initState = {
  todos: [],
};

export const todoSlice = (set: any) => ({
  ...initState,

  fetchAllTodo: async () => {
    set({ todos: await getAllTodo() }, MERGE_STATE, "todo/list");
  },

  createTodo: async (content: string) => {
    const newTodo = await createTodo(content);
    set(
      (state: StoreState) => {
        state.todos.push(newTodo);
      },
      MERGE_STATE,
      "todo/create"
    );
  },

  updateTodo: async (todo: Todo) => {
    const updatedTodo = await updateTodo(todo);
    set((state: StoreState) => {
      for (const e of state.todos) {
        e.id === updatedTodo.id && Object.assign(e, updatedTodo);
      }
    });
  },

  deleteTodo: async (id: number) => {
    await deleteTodo(id);
    set((state: StoreState) => {
      state.todos = state.todos.filter((e) => e.id !== id);
    });
  },
});

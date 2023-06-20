import { reactive } from "vue";
import { Todo } from "./gql/graphql";

export const store = reactive({
  count: 0,
  increase() {
    this.count++;
  },
});

export const todoStore = reactive({
  allTodo: <Todo[]>[],
  setAllTodo(allTodo: Todo[]) {
    this.allTodo = allTodo;
  },
  addTodo(todo: Todo) {
    this.allTodo.push(todo);
  },
  deleteTodo(todo: Todo) {
    this.allTodo = this.allTodo.filter((e) => e.id !== todo.id);
  },
  updateTodo(todo: Todo) {
    for (const e of this.allTodo) {
      if (e.id === todo.id) {
        e.content = todo.content;
        e.isDone = todo.isDone;
      }
    }
  },
});

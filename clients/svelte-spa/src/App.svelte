<script>
  import { SvelteUIProvider } from "@svelteuidev/core";
  import TodoList from "./lib/components/TodoList.svelte";
  import TodoInput from "./lib/components/TodoInput.svelte";
  import { createTodo, fetchTodoList } from "./lib/services/todoService";
  import { onMount } from "svelte";

  let todoItems = [];

  const handleInputSubmit = async (content) => {
    const todo = await createTodo(content);
    todoItems = [...todoItems, todo];
  };

  const handleDelete = (item) => {
    todoItems.splice(item.id - 1, 1);
    todoItems = [...todoItems];
  };

  const log = () => console.table(todoItems);

  onMount(async () => {
    todoItems = await fetchTodoList();
  });
</script>

<SvelteUIProvider themeObserver="dark">
  <main>
    <TodoInput onSubmit={handleInputSubmit} />
    <TodoList {todoItems} {handleDelete} />
    <button on:click={log}>console.log</button>
  </main>
</SvelteUIProvider>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-items: start;
  }
</style>

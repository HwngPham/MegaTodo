<script>
  import { SvelteUIProvider } from "@svelteuidev/core";
  import TodoList from "./lib/TodoList.svelte";
  import TodoInput from "./lib/TodoInput.svelte";

  let todoItems = [
    { id: 1, content: "create foo", isDone: false },
    { id: 2, content: "create bar", isDone: false },
    { id: 3, content: "create buzz", isDone: true },
  ];

  const handleInputSubmit = (content) => {
    todoItems = [
      ...todoItems,
      {
        id: todoItems.length + 1,
        content,
        isDone: false,
      },
    ];
  };

  const handleDelete = (item) => {
    todoItems.splice(item.id - 1, 1);
    todoItems = [...todoItems];
  };

  const log = () => console.table(todoItems);
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

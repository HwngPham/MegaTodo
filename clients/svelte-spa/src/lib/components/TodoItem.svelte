<script>
  import { deleteTodo, updateTodo } from "../services/todoService";

  export let item;
  export let handleDelete;

  const onChange = (e) => {
    updateTodo({ ...item, isDone: e.target.checked });
  };

  const onDelete = () => {
    handleDelete(item);
    deleteTodo(item.id);
  };
</script>

<li>
  <div>
    <span>
      <input type="checkbox" bind:checked={item.isDone} on:change={onChange} />
    </span>

    <span class={item.isDone ? "crossover" : ""}>{item.content}</span>
  </div>

  <span class="clear" on:click={onDelete}>❌</span>
</li>

<style>
  li {
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  span.clear {
    cursor: pointer;
  }

  .crossover {
    text-decoration: line-through;
  }
</style>

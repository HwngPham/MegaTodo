<script>
  export let item;
  export let handleDelete;
</script>

<li>
  <div>
    <span>
      <input type="checkbox" bind:checked={item.isDone} />
    </span>

    <span class={item.isDone ? "crossover" : ""}>{item.content}</span>
  </div>

  <span class="clear" on:click={() => handleDelete(item)}>❌</span>
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

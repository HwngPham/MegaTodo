<script>
  import TodoItem from "./TodoItem.svelte";

  export let todoItems;
  export let handleDelete;
</script>

<section>
  <ul>
    {#each todoItems as item, _}
      <li><TodoItem {item} {handleDelete} /></li>
    {/each}
  </ul>
</section>

<style>
  ul {
    list-style-type: none;
    padding-left: 0;
  }
</style>

<script>
  export let onSubmit;

  let input = "";

  const handleSubmit = () => {
    onSubmit(input);
    input = "";
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input
    id="todo-input"
    placeholder="Let's do something..."
    bind:value={input}
  />
</form>

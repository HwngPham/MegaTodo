<script>
  export async function load({ fetch, params }) {
    const res = await fetch("http://localhost:8000/todos");
    const item = await res.json();

    console.log("===item", item);
    return { item };
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<script>
    export let data;
</script>


<h1>Page One</h1>

{#each data?.records as job}
<h3>{JSON.stringify(job)}</h3>
{/each}
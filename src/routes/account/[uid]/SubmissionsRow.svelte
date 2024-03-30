<script>
    export let verdict, date, problem;
</script>

<tr>
    <td>{date}</td>
    {#if problem != "No submissions yet..."}
        <td><a href="/problems/{problem}/">{problem}</a></td>
    {:else}
        <td>{problem}</td>
    {/if}
    {#if verdict == "RJ"}
        <td class="text-danger">{verdict}</td>
    {:else if verdict == "AC"}
        <td class="text-success">{verdict}</td>
    {/if}
</tr>

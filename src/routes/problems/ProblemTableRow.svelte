<script>
    export let link, statement, origin, rating;
</script>

<tr>
    <td style="height:25px;text-align: left;"><a href="/problems/{link}">{link}</a></td>
    <td style="height:25px;text-align: left;width: 25px;">{rating}</td>
    <td style="height:25px;font-size:xx-large;">{@html statement}</td>
    <td style="height:25px;">{origin}</td>
</tr>
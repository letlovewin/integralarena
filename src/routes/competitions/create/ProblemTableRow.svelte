<script>
    export let link, statement, origin, rating, problemSelectionGroup;
    let color, rating_addon;
    if(rating<=5) {
        color="bg-primary";
        rating_addon = "Trivial";
    } else if(rating<=10) {
        color="bg-success";
        rating_addon = "Easy";
    } else if(rating<20) {
        color="bg-warning";
        rating_addon = "Medium";
    } else if(rating>=20) {
        color="bg-danger";
        rating_addon = "Hard";
    }
</script>

<tr>
    <td style="vertical-align:middle;"><input type="checkbox" bind:group={problemSelectionGroup} value={link} /></td>
    <td style="height:25px;text-align: left;vertical-align:middle;width:25px"><a href="/problems/{link}">{link}</a></td>
    <td class="{color} my-auto" style="height:25px;text-align: left;width: 25px;vertical-align:middle;">{rating} ({rating_addon})</td>
    <td style="height:25px;font-size:large;vertical-align:middle;">{@html statement}</td>
    <td style="height:25px;vertical-align:middle;">{origin}</td>
</tr>
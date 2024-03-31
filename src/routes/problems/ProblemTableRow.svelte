<script>
    export let link, statement, origin, rating;
    let color;
    if(rating<5) {
        color="";
    } else if(rating<=10) {
        color="text-primary";
    } else if(rating<=20) {
        color="text-success";
    }
</script>

<tr>
    <td style="height:25px;text-align: left;vertical-align:middle;width:25px"><a href="/problems/{link}">{link}</a></td>
    <td class="{color} my-auto" style="height:25px;text-align: left;width: 25px;vertical-align:middle;">{rating}</td>
    <td style="height:25px;font-size:xx-large;vertical-align:middle;">{@html statement}</td>
    <td style="height:25px;vertical-align:middle;">{origin}</td>
</tr>
<script>
    export let link, statement, origin, rating;
    let color;
    if(rating<5) {
        color="#0b03fc";
    } else if(rating<=10) {
        color="#0088ff";
    } else if(rating<=20) {
        color="#4c008f";
    } else if(rating <= 100) {
        color="#8f000c";
    }
</script>


<tr>
    <td class=" my-auto" style="height:25px;text-align: left;width: 45px;vertical-align:middle;color:{color};"><a href="/account/{rating}">{rating}</a></td>
    <td style="height:25px;font-size:large;vertical-align:middle;"><em>{@html statement}</em></td>
    <td style="height:25px;vertical-align:middle;">{origin}</td>
</tr>
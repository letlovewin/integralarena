<script>
    export let title,description,runtime,cid;
</script>


<tr>
    <td class=" my-auto" style="height:25px;text-align: left;width: 45px;vertical-align:middle;"><a href="/competitions/r/{cid}">{title}</a></td>
    <td style="height:25px;font-size:large;vertical-align:middle;"><em>{@html description}</em></td>
    <td style="height:25px;width:100px;vertical-align:middle;">{runtime}</td>
</tr>
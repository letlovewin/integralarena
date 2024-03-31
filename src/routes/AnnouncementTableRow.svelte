<script>
    export let title,content,author;
</script>

<tr>
    <td style="text-align: left;vertical-align:middle;">{title}</td>
    <td style="width: 61.906px;vertical-align:middle;">{@html content}</td>
    <td style="width: 71.938px;vertical-align:middle;">by <a href="account/{author}">{author}</a></td>
</tr>
const text={template:`

<table class="table table-striped table-dark">
 <thead style="position: sticky;top: 0" class= "thead-light">


     <tr>
        <th>
            Name
        </th>
        <th>
            Filesize
        </th>
        <th>
          Content

        </th>

        <th>
           Modified date
        </th>

        <th>
           Created date
        </th>

     </tr>
</thead>
<tbody>
    <tr>
        <td>{{this.$route.params.id[0]}}</td>
        <td>{{this.$route.params.id[1]}}</td>
        <td>{{this.$route.params.id[2]}}</td>
        <td>{{this.$route.params.id[3]}}</td>
        <td>{{this.$route.params.id[4]}}</td>
    </tr>
</tbody>
</thead>
</table>

`
}






















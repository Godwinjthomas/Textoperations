const Files={template:`
<div>
    <th>
      <div class="d-flex flex-row">
        <input class="form-control m-2"
        v-model="filenameFilter"
        v-on:keyup="FilterFn()"
        placeholder="Search By Name ">
     </div>
    </th>

    <th>
      <div class="d-flex flex-row">
         <input class="form-control m-2"
          v-model="modifiedFilter"
          v-on:keyup="FilterFn()"
          placeholder="Modified YYYY-MM-DD">
      </div>
   </th>

</script>
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
        <th>
           Page
        </th>
     </tr>
</thead>
<tbody>
    <tr  v-for="Text in Files">
        <td>{{Text.Name}}</td>
        <td>{{Text.f_size}}</td>
        <td>
             {{Text.content}}
             <button type ="button"
             data-bs-toggle="modal"
             data-bs-target="#exampleModal"
             @click="display(Text)">

               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
             </button>
        </td>


        <td>{{Text.modified_date}}</td>
        <td>{{Text.created_date}}</td>
        <td>
        <button type ="button"
             class="btn btn-light mr-1"
             data-bs-dismiss="modal"
             @click="pagedisplay(Text.Name,Text.f_size,Text.content,Text.modified_date,Text.created_date)">


                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-display-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12c0 .667-.083 1.167-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75c-.167-.333-.25-.833-.25-1.5h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h4z"/>
                    </svg>

             </button>
        </td>
    </tr>
</tbody>


</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content" fill="green">
    <div class="modal-header">
        <h5 class="modal-title"  id="exampleModalLabel">{{content}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="input-group mb-3">
              <h5>{{full_content}}</h5>
        </div>
    </div>
</div>
</div>
</div>
</div>

`,

data(){
    return{
        Files:[],
        modalTitle:"",
        Name:"",
        f_size:"",
        content:"",
        modified_date:"",
        created_date:"",

        departmentsWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"file")
        .then((response)=>{
            this.Files=response.data;
            this.modifiedWithoutFilter=response.data;
        });
    },

    display(Text){
        this.modalTitle="content";
        this.content=Text.content;
        if(Text.full_content == null){
           this.full_content = Text.content;
           return full_content;
        }
        else{
           this.full_content=Text.full_content;
           return full_content;
        }

    },
    pagedisplay(Name,f_size,content,modified_date,created_date){
         this.page = [Name,f_size,content,modified_date,created_date];
         this.$router.push({name:"text",params:{id:this.page}})
    },


    FilterFn(){
        var modifiedFilter=this.modifiedFilter;
        var filenameFilter=this.filenameFilter;

        this.Files=this.modifiedWithoutFilter.filter(
            function(el){
                return el.modified_date.toString().toLowerCase().includes(
                    modifiedFilter.toString().trim().toLowerCase()
                )&&
                el.Name.toString().toLowerCase().includes(
                    filenameFilter.toString().trim().toLowerCase()
                )
            });
    },

},
mounted:function(){
    this.refreshData();
}
}
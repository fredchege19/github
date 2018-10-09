<template>
  <div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
    <a href="/respositories" class="btn btn-primary" >Respositories</a>
    <a href="/createrepo" class="btn btn-primary" >Create Repo</a>

    <div id="nav">

      <form>
  <div class="form-group">
  <span style="color:green;">{{message}}</span><br>
    <label for="exampleInputEmail1">Name</label>
    <input  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name">

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input  type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Description of project">
  </div>
   <div class="form-group">
    <label for="exampleFormControlSelect2">Private</label>
    <select multiple class="form-control" id="exampleFormControlSelect2" >
      <option>True</option>
      <option>False</option>
    
    </select>
  </div>
</form>
<a class="btn btn-primary" v-on:click="submitData()" >Create Repo</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
export default{

data(){
  return{
    message:'',
  }
},
 methods: {
 submitData() {
        this.message = 'Repo Submitted successful';
  
    }
    }
  }
</script>


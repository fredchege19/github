<template>
<div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
    <a href="/respositories" class="btn btn-primary" >Respositories</a>
    <a href="/createrepo" class="btn btn-primary" >Create Repo</a>


    <div id="respositories">
  <h2>My Respositories</h2>
  {{status}}
  <ul >
  <li v-for="repos in repositories" >
   <span class="name"><b>Repo Full Name: </b><router-link v-bind:to="'/contents/'+ repos.name">{{repos.full_name}} </router-link></span><br>
   <span class="date"><b>Repo Name: </b>{{repos.name}}</span>
   <span class="commit"><b>Time Created: </b>{{repos.created_at}}</span>
   <a href="#">View Contents</a> | <a href="#"> Edit</a>
   <span class="commit"><router-link v-bind:to="'/commits/'+ repos.name"><a class="btn btn-primary" style="color:white;" >View Commits</a></router-link></span>
   
</li>
<br>
<a href="/createrepo" class="btn btn-primary" >Create new Repository</a>
  </ul>
    <router-view/>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default{
 mounted () {
    this.$store.dispatch('loadRepositories')
  },

    computed: {
        
    repositories(){
    return this.$store.state.repositories;
    status="";
    }
},
created(){
    var status="loading";
}
}
</script>

<style scoped>
#respositories{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#respositories ul{
    padding: 0;
    list-style-type: none;
}
#respositories li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.commit{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
.date{
    margin-left:5px;
}
</style>

<template>
<div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
    <a href="/respositories" class="btn btn-primary" >Respositories</a>
    <a href="/createrepo" class="btn btn-primary" >Create Repo</a>
  

    <div id="respositories">
  <h2>Repository Contents</h2>
  <ul > 
  <li >
  <span class="name"><b>Work in Progress</b></span>
   
</li>
<br>
{{repo}}

  </ul>
    <router-view/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'

export default{
 data () {
     return{
         repo:'',
     }
  },
  created(){
      let repo =this.$route.params.repo;
      localStorage.setItem('repo',repo);
  },
   mounted () {
    this.$store.dispatch('loadContents')
  },
    computed: {
    contents(){
    return this.$store.state.contents;
    }
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

<template>
<div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
    <a href="/respositories" class="btn btn-primary" >Respositories</a>
    <a href="/createrepo" class="btn btn-primary" >Create Repo</a>
  

    <div id="respositories">
  <h2>My commits</h2>
  <ul v-for="commit in commits">
  <li >
   <span class="name"><b>Commit Message:</b> {{commit.commit.message}}</span><br>

   <span class="name"><b>Commit Arthur <br>Name:</b> {{commit.commit.author.name}}</span><br>
   <span class="name"><b>Email:</b> {{commit.commit.author.email}}</span><br>
   <span class="name"><b>Date:</b> {{commit.commit.author.date}}</span>

   <span class="name"><b>Url:</b> {{commit.commit.url}}</span>
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
    this.$store.dispatch('loadCommits')
  },
    computed: {
    commits(){
    return this.$store.state.commits;
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

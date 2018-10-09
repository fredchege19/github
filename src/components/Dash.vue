<template>
  <div class="home">
<h1 align="center" style="margin-top:5%;">Hello, We Are Glad You Are Here!!!!!</h1>
  <h3 align="center" margin-top="5%">Welcome to github manager App</h3>
    <h5 align="center" margin-top="5%">Click the button below to proceed to your dashboard</h5>
    <a id="login-button" href="/profile">Proceed To Your Dashboard</a>
    
  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs';
export default {
  name: 'Dash',
  computed: {
  },
  data () {
    return {
      userCode: '',
      usereState: '',
    }
  },
  methods: {
  },
  created(){
    this.userCode=this.$route.query.code;
    this.userState=this.$route.query.state;

     axios
        .get('https://github.com/login/oauth/access_token?'+ Qs.stringify({
            client_id: 'e8dd7a4064afff9df1ee',
            client_secret: '44323768a892a3f87ea9012f4f9730189bbc3681',
            code: this.userCode,
            usereState: this.userState
        }))
        .then(function(response){
          let accessToken= response.request.responseText;
          localStorage.setItem('accessToken', accessToken)
        });
        
      }
}
</script>

<style>
body{
    background-color:#e6b8a3;
}
#login-button {
  background-color: #3c4146;
  color: #EEF4EC;
  padding: 1em;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -1em;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  width: 150px;
  text-align: center;
}
</style>
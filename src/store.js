import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)
let axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = ''; 


export default new Vuex.Store({
  
  state: {
    accessToken: '',
    username: '',
    profiles: [],
    repositories: [],
    commits:[],
    contents:[]

  },
  mutations: {
    
    UPDATE_ACCESSTOKEN: (state, accessToken) => {
      state.accessToken = accessToken
    },

    SET_USERNAME: (state, username) => {
      state.username = username
    },

    SET_PROFILES (state, profiles) {
      state.profiles = profiles
    },
    SET_REPOSITORIES (state, repositories) {
      state.repositories = repositories
    },

    SET_COMMITS (state, commits) {
      state.commits = commits
    },
    SET_CONTENTS (state, contents) {
      state.contents = contents
    },
    
  },
  actions: { 

    loadProfiles ({ commit }) {
      axios
        .get('https://api.github.com/user?'+ localStorage.getItem('accessToken'))
        .then(r => r.data)
        .then(profiles => {
        commit('SET_PROFILES', profiles)
        })
    },
    
    loadRepositories ({ commit }) {
      let username=this.state.profiles.login;
      axios
        .get('https://api.github.com/users/'+ localStorage.getItem('userName') +'/repos')
        .then(r => r.data)
        .then(repositories => {
        commit('SET_REPOSITORIES', repositories)
        })
    },

    loadContents ({ commit }) {
      axios
        .get('https://api.github.com/repos/'+ localStorage.getItem('userName')+'/' +localStorage.getItem('repo'))
        .then(r => r.data)
        .then(repositories => {
        commit('SET_CONTENTS', repositories)
        })
    },

    loadCommits ({ commit }) {
      axios
        .get('https://api.github.com/repos/'+ localStorage.getItem('userName')+'/'+ localStorage.getItem('repo') +'/'+ 'commits')
        .then(r => r.data)
        .then(commits => {
        commit('SET_COMMITS', commits)
        })
    }

    
  },
});

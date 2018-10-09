import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';


Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
     {
      path: '/',
      name: 'home',
      component: Home,
    }, 
    {
      path: '/dash',
      name: 'dash',
      component: () => import(/* webpackChunkName: "about" */ './components/Dash.vue'),
    }, 
    {
      path: '/contents/:repo',
      name: 'content',
      component: () => import(/* webpackChunkName: "about" */ './components/Contents.vue'),
    }, 
    {
      path: '/commits/:repo',
      name: 'commits',
      component: () => import(/* webpackChunkName: "about" */ './components/Commits.vue'),
    }, 
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
     {
      path: '/profile',
      name: 'profile',
        component: () => import(/* webpackChunkName: "about" */ './components/Profile.vue')
    
      
    },
    {
      path: '/respositories',
      name: 'respositories',  
      component: () => import(/* webpackChunkName: "about" */ './components/Respositories.vue')
     
    },

    {
      path: '/createrepo',
      name: 'createrepo',
      component: () => import(/* webpackChunkName: "about" */ './components/CreateRepo.vue'),
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter(to, from, next) {
       window.location = 'https://github.com/login/oauth/authorize?client_id='+ 'e8dd7a4064afff9df1ee'
    }
    },
    


  ],
});

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Milks from './views/Milk.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/Milks',
      name: 'Milks',
      component: Milks
    },{
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})

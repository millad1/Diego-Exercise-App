import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Exercises from './views/Exercises.vue'
import LoginComponent from "./views/myAccount.vue"
import SecureComponent from "./views/Secure.vue"
import Search from "./views/Search.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/myAccount',
      name: 'myAccount',
      component: () => import(/* webpackChunkName: "account" */ './views/myAccount.vue')
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: Exercises
    },
    {
      path: '/',
      redirect:
      {
          name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/secure",
      name: "secure",
      component: SecureComponent
    },
    {
      path: "/search",
      name: "search",
      component: Search
    }
  ]
})
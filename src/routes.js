import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import About from './pages/About'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router

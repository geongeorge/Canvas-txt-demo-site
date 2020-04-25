import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import Docs from './pages/Docs'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/docs', component: Docs }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router

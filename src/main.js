import Vue from 'vue'
import router from './routes'
import App from './App'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

import vueHljs from 'vue-hljs'
import 'highlight.js/styles/an-old-hope.css'
Vue.use(vueHljs)

import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

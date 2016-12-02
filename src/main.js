import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'

Vue.use(VueRouter)

// set up router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

// initialise the app
const app = new Vue({ // eslint-disable-line no-unused-vars
  router,
  render: h => h(App)
}).$mount('#app')

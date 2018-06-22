import Vue from 'vue'
import router from './router'
import store from './store'
import App from './main'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render (h) {
    return h('app')
  },
  components: { App }
})

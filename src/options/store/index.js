import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import history from './history'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    history
  },
  strict: process.env.NODE_ENV !== 'production'
})

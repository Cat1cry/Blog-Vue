import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {},
  mutations: {
    // eslint-disable-next-line space-before-function-paren
    TOKEN(state, value) {
      console.log('Store:' + value)
      state.token = value
      window.localStorage.setItem('token', state.token)
    }
  },
  actions: {},
  modules: {}
})

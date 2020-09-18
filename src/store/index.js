import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cwd: "/Users/cosroe/Developer/Notes/Dust-Notes",
    root: "/Users/cosroe/Developer/Notes/Dust-Notes"
  },
  mutations: {
    setCWD(state, cwd) {
        state.cwd = cwd;
    }
  },
  getters: {
    cwd: state => {state.cwd},
    root: state => {state.root}
  },
  actions: {
  },
  modules: {
  }
})

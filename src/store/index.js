import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cwd: "/Users/cosroe/Developer/Notes/Dust-Notes",
    root: "/Users/cosroe/Developer/Notes/Dust-Notes",
    openTabs: []
  },
  mutations: {
    setCWD(state, cwd) {
        state.cwd = cwd;
    },

    addTab(state, tab) {
        state.openTabs.push(tab);
    }
  },
  getters: {
    cwd: state => {state.cwd},
    root: state => {state.root},
    openTabs: state => {state.openTabs}
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialogs: false
  },
  mutations: {
    setDialog(state, payload){
      state.dialogs = payload
    }
  },
  actions: {
    openModal({ commit }){
      commit('setDialog', true)
    }
  }
})

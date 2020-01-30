import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    landingQuestions: {}
  },

  mutations: {
    viewLandingQuestion(state,data) {
      state.landingQuestions=data;
    }
  },

  actions: {
    viewLandingQuestion({commit}){
      return new Promise((resolve, reject) => {
        Axios.get('http://api' )
          .then(response => {
              commit('viewLandingQuestion', response)
              resolve(response)
          })
          .catch(error => {
            window.console.log(error)
            reject(error)
          })
      })
    }
  },

  getters: {
    getLandingQuestion(state) {
      return state.landingQuestions || {}
    }
  }
})

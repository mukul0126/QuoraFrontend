import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    landingQuestions: {},
    questionDetail: {}
  },

  mutations: {
    viewLandingQuestion(state,data) {
      state.landingQuestions=data;
    },
    
    getQuestionDetails(state, data) {
      state.questionDetail=data;
    }

  },

  actions: {
    viewLandingQuestion({commit}){
      let userId=localStorage.getItem('userId');
      return new Promise((resolve, reject) => {
        Axios.get('http://172.16.20.107:8085/question/getLoginFeed/' + userId )
          .then(response => {
            window.console.log("the response",response.data.feed);
              commit('viewLandingQuestion', response.data.feed)
              resolve(response)
          })
          .catch(error => {
            window.console.log(error)
            reject(error)
          })
      })
    },

    getQuestionDetails({ commit }, questionid) {
      window.console.log('questionId', questionid)
      Axios.get('http://10.177.69.100:8080/' + questionid.questionId)
        .then(response => {
          commit('getQuestionDetails', response)
        })
        .catch(error => {
          window.console.log(error)
        })
    }

  },

  getters: {
    getLandingQuestion(state) {
      return state.landingQuestions || {}
    },

    questionDetails(state) {
      return state.questionDetail || {}
    }
  }
})

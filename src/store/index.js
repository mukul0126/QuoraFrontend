import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    landingQuestions: {},
    questionDetail: {},
    userDetails: {},
    organizationDetails: {},
    approveUserDetails: {},
    approveQuestionDetails: {}
  },

  mutations: {
    viewLandingQuestion(state,data) {
      state.landingQuestions=data;
    },

    getQuestionDetails(state, data) {
      state.questionDetail=data;
    },

    getUserProfile(state, data) {
      state.userDetails=data;
    },

    getOrganizationProfile(state, data) {
      state.organizationDetails=data;
    },

    setApproveUserDetails(state, data) {
      state.approveUserDetails=data;
    },

    setApproveQuestionDetails(state,data) {
      state.approveQuestionDetails=data;
    }

  },

  actions: {
    viewLandingQuestion({commit}){
      let userId=localStorage.getItem('userId');
      return new Promise((resolve, reject) => {
        Axios.get('http://172.16.20.107:8085/question/getLoginFeed/' + userId )
          .then(response => {
            window.console.log("the response",response);
              commit('viewLandingQuestion', response)
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
    },

    getUserProfileDetails({commit}, userId) {
      Axios.get('http://172.16.20.46:8086/user/viewUser/' + userId)
          .then(response => {
            window.console.log("userdetails",response)
            commit('getUserProfile', response)
          })
          .catch(error => {
            window.console.log(error)
          })
    },

    getOrganizationProfileDetails({commit}, organizationId) {
      Axios.get('http://172.16.20.46:8086/organiaztion/viewOrganization/' + organizationId)
          .then(response => {
            window.console.log("organizationdetails",response)
            commit('getOrganizationProfile', response)
          })
          .catch(error => {
            window.console.log(error)
          })
    },

    approveUser({commit}, moderatorId) {
      Axios.get('http://172.16.20.46:8086/moderator/approvaleList/' + moderatorId)
          .then(response => {
            window.console.log("getApproveUserDetails",response)
            commit('setApproveUserDetails', response)
          })
          .catch(error => {
            window.console.log(error)
          })
    },

    approveUserId(context, data) {
      Axios.post('http://172.16.20.46:8086/moderator/approve/' + data.userId+ "/" +data.moderatorId)
          .then(response => {
            window.console.log("getApproveUserDetails",response)
          })
          .catch(error => {
            window.console.log(error)
          })
    },

    disapproveUserId(context, data) {
      Axios.post('http://172.16.20.46:8086/moderator/disapove/' +data.moderatorId)
          .then(response => {
            window.console.log("getApproveUserDetails",response)
          })
          .catch(error => {
            window.console.log(error)
          })
    },

    approveQuestion({commit}, moderatorId) {
      Axios.get('http://172.16.20.46:8086/' + moderatorId)
          .then(response => {
            window.console.log("getApproveUserDetails",response)
            commit('setApproveQuestionDetails', response)
          })
          .catch(error => {
            window.console.log(error)
          })
    },

    approveQuestionId(context, data) {
      Axios.post('http://172.16.20.46:8086/' + data.questionId+ "/" +data.moderatorId)
          .then(response => {
            window.console.log("setApproveQuestionDetails",response)
          })
          .catch(error => {
            window.console.log(error)
          })
    },

    disapproveQuestionId(context, data) {
      Axios.post('http://172.16.20.46:8086/' +data.moderatorId)
          .then(response => {
            window.console.log("getApproveUserDetails",response)
          })
          .catch(error => {
            window.console.log(error)
          })
    }

  },

  getters : {
    getLandingQuestion(state) {
      window.console.log("getter from store",state.landingQuestions)
      return state.landingQuestions || {}
    },

    questionDetails(state) {
      return state.questionDetail || {}
    },

    getUserDetails(state) {
      return state.userDetails || {}
    },

    getOrganizationDetails(state) {
      return state.organizationDetails || {}
    },

    getApproveUserDetails(state) {
      return state.approveUserDetails || {}
    },

    getApproveQuestionDetails(state) {
      return state.approveQuestionDetails || {}
    }
  }
})

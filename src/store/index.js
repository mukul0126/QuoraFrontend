import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
const login_path = 'http://172.16.20.32:8080'
const base_path = 'http://172.16.20.46:8086'
const search_path ='http://172.16.20.149:8080'
const analytics_path = 'http://172.16.20.33:8080'
export default new Vuex.Store({
  state: {
    landingQuestions: {},
    landingQuestionsWithoutLogin: {},
    questionDetail: {},
    userDetails: {},
    organizationDetails: {},
    approveUserDetails: {},
    approveQuestionDetails: {},
    questionDetailsById: {},
    approveAnswerDetails: {},
    token: localStorage.getItem('token') || '',
    status: '',
    UserDetails: {},
    dummy: '',
    ads: '',
    user:{},
    searchUser:[],
    searchOrganization:[],
    searchQuestion:[],
  },

  mutations: {
    viewLandingQuestionWithoutLogin(state, data) {
      state.landingQuestionsWithoutLogin = data;
    },
    viewLandingQuestion(state, data) {
      state.landingQuestions = data;
    },

    getQuestionDetails(state, data) {
      state.questionDetail = data;
    },

    getUserProfile(state, data) {
      state.userDetails = data;
    },

    getOrganizationProfile(state, data) {
      state.organizationDetails = data;
    },

    setApproveUserDetails(state, data) {
      state.approveUserDetails = data;
    },

    setApproveQuestionDetails(state, data) {
      state.approveQuestionDetails = data;
    },

    setApproveAnswerDetails(state, data) {
      state.approveAnswerDetails = data;
    },

    setQuestionDetailsById(state, data) {
      state.questionDetailsById = data
    },
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = "success"
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = ''
      state.token = ''
    },
    setUserDetails(state, UserDetails) {
      state.UserDetails = UserDetails
    },
    setDummy(state, dummy) {
      state.dummy = dummy
    },
    setAds(state, ads) {
      state.ads = ads
    },
    setSearchUser(state,searchUser) {
      state.searchUser=searchUser
    },
    setSearchQuestion(state,searchQuestion) {
      state.searchQuestion=searchQuestion
    },
    setSearchOrganization(state,searchOrganization) {
      state.searchOrganization=searchOrganization
    }
    

  },

  actions: {
    
    landingWithoutLogin({commit}) {
      return new Promise((resolve, reject) => {
        Axios.get('http://172.16.20.107:8085/question/getWithoutLoginFeed')
          .then(response => {
            window.console.log("without login response", response);
            commit('viewLandingQuestionWithoutLogin', response)
            resolve(response)
          })
          .catch(error => {
            window.console.log(error)
            reject(error)
          })
      })
    },
    viewLandingQuestion({ commit }) {
      let userId = localStorage.getItem('userId');
      return new Promise((resolve, reject) => {
        Axios.get('http://172.16.20.107:8085/question/getLoginFeed/' + userId)
          .then(response => {
            window.console.log("the response", response);
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

    getUserProfileDetails({ commit }, userId) {
      Axios.get('http://172.16.20.46:8086/user/viewUser/' + userId)
        .then(response => {
          window.console.log("userdetails", response)
          commit('getUserProfile', response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    getOrganizationProfileDetails({ commit }, organizationId) {
      Axios.get('http://172.16.20.46:8086/organiaztion/viewOrganization/' + organizationId)
        .then(response => {
          window.console.log("organizationdetails", response)
          commit('getOrganizationProfile', response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    approveUser({ commit }, moderatorId) {
      Axios.get('http://172.16.20.46:8086/moderator/approvaleList/' + moderatorId)
        .then(response => {
          window.console.log("getApproveUserDetails", response)
          commit('setApproveUserDetails', response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    approveUserId(context, data) {
      Axios.post('http://172.16.20.46:8086/moderator/approve/' + data.userId + "/" + data.moderatorId)
        .then(response => {
          window.console.log("getApproveUserDetails", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    disapproveUserId(context, data) {
      Axios.post('http://172.16.20.46:8086/moderator/disapove/' + data.userId + "/" + data.moderatorId)
        .then(response => {
          window.console.log("getApproveUserDetails", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    approveQuestion({ commit }, moderatorId) {
      Axios.get('http://172.16.20.46:8086/moderator/questionApprovalList/' + moderatorId)
        .then(response => {
          window.console.log("getApproveUserDetails", response)
          commit('setApproveQuestionDetails', response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    approveQuestionId(context, questionId) {
      Axios.put('http://172.16.20.107:8085/question/approveQuestionByModerator/' + questionId)
        .then(response => {
          window.console.log("setApproveQuestionDetails", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    disapproveQuestionId(context, questionId) {
      Axios.put('http://172.16.20.107:8085/question/disapproveQuestionByModerator/' + questionId)
        .then(response => {
          window.console.log("getApproveUserDetails", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    approveAnswer({ commit }, moderatorId) {
      Axios.get('http://172.16.20.46:8086/moderator/answeApprovalListy/' + moderatorId)
        .then(response => {
          window.console.log("getApproveUserDetails", response)
          commit('setApproveAnswerDetails', response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    approveAnswerId(context, answerId) {
      Axios.put('http://172.16.20.107:8085/answer/approveAnswerByModerator/' + answerId)
        .then(response => {
          window.console.log("setApproveQuestionDetails", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    disapproveAnswerId(context, answerId) {
      Axios.put('http://172.16.20.107:8085/answer/disapproveAnswerByModerator/' + answerId)
        .then(response => {
          window.console.log("getApproveUserDetails", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    addQuestion(context, data) {
      window.console.log("add question", data)
      Axios.post('http://172.16.20.107:8085/question/add', data)
        .then(response => {
          window.console.log("response to add question", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    getQuestionDetailsById({ commit }, questionId) {
      window.console.log("questionId from store", questionId)
      Axios.get('http://172.16.20.107:8085/answer/getAnswersByQuestionId/' + questionId)
        .then(response => {
          window.console.log("response to get question details", response)
          commit("setQuestionDetailsById", response.data)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    submitAnswer(context, answerDetails) {
      Axios.post('http://172.16.20.107:8085/answer/add', answerDetails)
        .then(response => {
          window.console.log("response to get question details", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    likeQuestion(context, questionId) {
      let userId = localStorage.getItem("userId")
      Axios.put('http://172.16.20.107:8085/question/likequestion/' + questionId + "/" + userId)
        .then(response => {
          window.console.log("response to get question details", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    dislikeQuestion(context, questionId) {
      let userId = localStorage.getItem("userId")
      Axios.put('http://172.16.20.107:8085/question/dislikequestion/' + questionId + "/" + userId)
        .then(response => {
          window.console.log("response to get question details", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    likeAnswer(context, answerId) {
      let userId = localStorage.getItem("userId")
      Axios.put('http://172.16.20.107:8085/answer/likeanswer/' + answerId + "/" + userId)
        .then(response => {
          window.console.log("response to get question details", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    dislikeAnswer(context, answerId) {
      let userId = localStorage.getItem("userId")
      Axios.put('http://172.16.20.107:8085/answer/dislikeanswer/' + answerId + "/" + userId)
        .then(response => {
          window.console.log("response to get question details", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    bestAnswer(context, data) {
      Axios.put('http://172.16.20.107:8085/question/choosingBestAnswer/' + data.questionId + '/' + data.answerId)
        .then(response => {
          window.console.log("response to get question details", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    // sendUserFollowRequest() {

    // }

    sendOrganizationFollowRequest(context, orgId) {
      let userId = localStorage.getItem("userId");
      Axios.post('http://172.16.20.46:8086/user/addFollowersToOrganization/' + userId + '/' + orgId)
        .then(response => {
          window.console.log("response to get question details", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    sendJoinRequest(context, orgId) {
      let userId = localStorage.getItem("userId");
      Axios.post('http://172.16.20.46:8086/organiaztion/addMember/' + userId + '/' + orgId)
        .then(response => {
          window.console.log("response to get question details", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    sendFollowUserRequest(context, followUser) {
      let userId = localStorage.getItem("userId");
      Axios.post('http://172.16.20.46:8086/user/addFollowers/' + userId + '/' + followUser)
        .then(response => {
          window.console.log("response to get question details", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    login({ commit }, data) {
      window.console.log(data)
      return new Promise((resolve, reject) => {
        commit('auth_request')
        // localStorage.setItem('userId',data.email)
        window.console.log(data.email)
        window.console.log(data, "vfvkfmvk")
        Axios({ url: login_path + "/auth/signin", data: data, method: 'POST' })
          .then(resp => {
            window.console.log(resp, 'response')
            const token = resp.data.accessToken
            window.console.log(resp)
            const user = resp.data.user
            localStorage.setItem('token', token)

            Axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            // commit('setRole',role)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },

    register({ commit }, user) {
      window.console.log('user', user)
      return new Promise((resolve, reject) => {
        // commit('auth_request')
        commit('setDummy', 'dummy')
        Axios({ url: login_path + "/auth/signup", data: user, method: 'POST' })
          .then(resp => {
            window.console.log(resp, 'response')
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    sendRole({ commit }, data) {
      let authStr = 'Bearer ' + localStorage.getItem('token')
      window.console.log('role data', data)
      return new Promise((resolve, reject) => {
        commit('setDummy', 'dummy')
        Axios({ url: login_path + "/role/updateRole", data: data, method: 'POST', headers: { "Authorization": authStr } })
          .then(resp => {
            window.console.log(resp, 'response')
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    getUserDetails({ commit }, data) {
      window.console.log('token data', data)
      let authStr = 'Bearer ' + localStorage.getItem('token')
      return new Promise((resolve, reject) => {
        Axios({ url: login_path + "/jwt/getUserDetails", data: data, method: 'POST', headers: { "Authorization": authStr } })
          .then(resp => {
            window.console.log(resp.data.role, 'response')
            commit('setUserDetails', resp.data)
            localStorage.setItem('userId', resp.data.id)
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    sendUserDetails({ commit }, data) {
      window.console.log('details data', data)
      return new Promise((resolve, reject) => {
        Axios({ url: base_path + "/user/addUser", data: data, method: 'POST' })
          .then(resp => {
            window.console.log(resp.data, 'response')
            commit('setDummy', 'dummy')
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    sendModeratorDetails({ commit }, data) {
      window.console.log('details data', data)
      return new Promise((resolve, reject) => {
        Axios({ url: base_path + "/moderator/addModerator", data: data, method: 'POST' })
          .then(resp => {
            window.console.log(resp.data, 'response')
            commit('setDummy', 'dummy')
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })

    },

    createOrg({ commit }, data) {
      const newData = {
        organizationName: data.organizationName,
        organizationEmail: data.organizationEmail,
        oranizationImage: data.oranizationImage,
      }
      window.console.log('org details', newData)
      return new Promise((resolve, reject) => {
        Axios({ url: base_path + "/organiaztion/addOrganization/" + data.id, data: newData, method: 'POST' })
          .then(resp => {
            window.console.log(resp.data, 'response')
            commit('setDummy', 'dummy')
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    sendCategory({ commit }, data) {
      window.console.log('data==========>', data.cat)
      window.console.log('id-------->', data.id)

      const data1 = {
        'categoryList': data.cat
      }

      return new Promise((resolve, reject) => {
        Axios({ url: base_path + "/user/addCategories/" + data.id, data: data1, method: 'POST' })
          .then(resp => {
            window.console.log(resp.data, 'response')
            commit('setDummy', 'dummy')
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    sentToAnalytics(context, data) {
      Axios.post('http://172.16.20.33:8080/search/save', data)
        .then(response => {
          window.console.log("response to get question details", response)
        })
        .catch(error => {
          window.console.log(error)
        })
    },
  
  showAds({ commit }) {
    let authStr = 'Bearer ' + localStorage.getItem('token')
    return new Promise((resolve, reject) => {
      Axios({ url: "http://172.16.20.181:8080/ads/getAds/2", method: 'GET', headers: { "Authorization": authStr } })
        .then(resp => {
          window.console.log(resp.data, 'response')
          commit('setAds', resp.data)
          resolve(resp)
        })
        .catch(error => {
          window.console.log(error)
          reject(error)
        })
    })
  },
  getSearchUserResults({commit},data) {
    window.console.log(data,'user')
    return new Promise((resolve,reject) => {
      Axios({url : search_path+"/search/searchUser",data:data,method:'POST'})
    .then(resp => {
      window.console.log(resp.data,'response')
      commit('setSearchUser',resp.data)
      resolve(resp)
    })
    .catch(err => {
      reject(err)
    })
    })
    
  },
  getSearchOrganizationResults({commit},data) {
    window.console.log(data,'user')
    return new Promise((resolve,reject) => {
      Axios({url : search_path+"/search/searchOrganization",data:data,method:'POST'})
    .then(resp => {
      window.console.log(resp.data,'response')
      commit('setSearchOrganization',resp.data)
      resolve(resp)
    })
    .catch(err => {
      reject(err)
    })
    })
    
  },
  getSearchQuestionResults({commit},data) {
    window.console.log(data,'user')
    return new Promise((resolve,reject) => {
      Axios({url : search_path+"/search/searchQuestion",data:data,method:'POST'})
    .then(resp => {
      window.console.log(resp.data,'response')
      commit('setSearchQuestion',resp.data)
      resolve(resp)
    })
    .catch(err => {
      reject(err)
    })
    })
    
  },
  sendTagsToAnalytics({commit},data) {
    // let authStr = 'Bearer ' + localStorage.getItem('token')
    window.console.log(data,'analytics data ----jvnfjnv----')
    return new Promise((resolve,reject) => {
      Axios({url: analytics_path+"/search/register",data:data,method:'POST'})
      .then(resp => {
        window.console.log(resp.data,'response')
        commit('setDummy', 'dummy')
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  afterLoginAnalytics ({commit},data) {
    // let authStr = 'Bearer ' + localStorage.getItem('token')
    window.console.log(data,'analytics data login----jvnfjnv----')
    return new Promise((resolve,reject) => {
      Axios({url: analytics_path+"/search/save",data:data,method:'POST'})
      .then(resp => {
        window.console.log(resp.data,'response')
        commit('setDummy', 'dummy')
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  logout({ commit },data) {
    return new Promise((resolve) => {
      window.console.log("inside logout")
      commit('logout')
      Axios({url : analytics_path+"/search/save",data:data,method:'POST'})
      .then(resp => {
        window.console.log(resp.data,'response')
        commit('setDummy', 'dummy')
        resolve(resp)
      })
      // localStorage.removeItem('token')
      // localStorage.removeItem('userId')
      delete Axios.defaults.headers.common['Authorization']
      resolve()
    })
  },
  
},

  getters: {
    getLandingQuestionWithoutLogin(state) {
      return state.landingQuestionsWithoutLogin || {}
    },
  getLandingQuestion(state) {
    window.console.log("getter from store", state.landingQuestions)
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
  },

  getQuestionDetails(state) {
    return state.questionDetailsById || {}
  },

  getUserInfo(state) {
    return state.UserDetails || {}
  },
  getApproveAnswerDetails(state) {
    return state.approveAnswerDetails || {}
  },
  getAds(state) {
    return state.ads || {}
  },
  isLoggedIn: state => {return state.token},
  authStatus: state => state.status,
  getSearchQuestion(state) {
    return state.searchQuestion
  },
  getSearchOrganization(state) {
    return state.searchOrganization
  },
  getSearchUser(state) {
    return state.searchUser
  }
}
})

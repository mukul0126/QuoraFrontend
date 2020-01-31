import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
const login_path = 'http://172.16.20.32:8080'
const base_path = 'http://172.16.20.46:8086'
export default new Vuex.Store({
  state: {
    landingQuestions: {},
    token: localStorage.getItem('token') || '',
    status:'',
    UserDetails:{},
    dummy:''

  },

  mutations: {
    viewLandingQuestion(state,data) {
      state.landingQuestions=data;
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
    setUserDetails(state,UserDetails) {
      state.UserDetails=UserDetails
    },
    setDummy(state,dummy) {
      state.dummy=dummy
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
            window.console.log(resp,'response')
            const token = resp.data.accessToken
            window.console.log(resp)
            const user = resp.data.user
            localStorage.setItem('token', token)
            // localStorage.setItem('userId',)
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
      // window.console.log(this.isLoggedIn,'iis logg'),
      // window.console.log(this.role,'rolk')
    },
    register({ commit }, user) {
      window.console.log('user',user)
      return new Promise((resolve, reject) => {
        // commit('auth_request')
        commit('setDummy','dummy')
        Axios({ url: login_path + "/auth/signup", data: user, method: 'POST' })
          .then(resp => {
            window.console.log(resp,'response')
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    sendRole({ commit } ,data) {
      let authStr = 'Bearer ' + localStorage.getItem('token')
      window.console.log('role data',data) 
      return new Promise((resolve, reject) => {
        commit('setDummy','dummy')
        Axios({url:login_path+"/role/updateRole",data:data,method:'POST',headers: {"Authorization" : authStr}})
        .then(resp => {
          window.console.log(resp,'response')
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    getUserDetails({commit},data) {
      window.console.log('token data',data)
      let authStr = 'Bearer ' + localStorage.getItem('token')
      
      return new Promise((resolve, reject) => {
        Axios({url:login_path+"/jwt/getUserDetails",data:data,method:'POST',headers: {"Authorization" : authStr}})
        .then(resp => {
          window.console.log(resp.data.role,'response')
          commit('setUserDetails',resp.data)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    sendUserDetails({commit},data) {
      window.console.log('details data',data)
      return new Promise((resolve,reject)=> {
        Axios({url: base_path+"/user/addUser",data:data,method:'POST'})
        .then(resp => {
          window.console.log(resp.data,'response')
          commit('setDummy','dummy')
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    sendModeratorDetails({commit},data) {
      window.console.log('details data',data)
      return new Promise((resolve,reject)=> {
        Axios({url: base_path+"/moderator/addModerator",data:data,method:'POST'})
        .then(resp => {
          window.console.log(resp.data,'response')
          commit('setDummy','dummy')
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })

    },
    createOrg({commit},data) {
      const newData ={
        organizationName: data.organizationName,
          organizationEmail: data.organizationEmail,
          oranizationImage: data.oranizationImage,
      }
      window.console.log('org details',newData)
      return new Promise((resolve,reject)=> {
        Axios({url:base_path+"/organiaztion/addOrganization/"+data.id ,data:newData, method:'POST'})
        .then(resp => {
          window.console.log(resp.data,'response')
          commit('setDummy','dummy')
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    sendCategory({commit},data) {

      
      window.console.log('data==========>',data.cat)
      window.console.log('id-------->',data.id)

      const data1={
        'categoryList':data.cat
      }

      
      return new Promise((resolve,reject) => {
        Axios({url:base_path+"/user/addCategories/"+data.id,data:data1,method:'POST'})
        .then(resp => {
          window.console.log(resp.data,'response')
          commit('setDunmmy','dummy')
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    }    
  },


  getters: {
    getLandingQuestion(state) {
      return state.landingQuestions || {}
    },
    getUserInfo(state) {
      return state.UserDetails || {}
    }
  }
})

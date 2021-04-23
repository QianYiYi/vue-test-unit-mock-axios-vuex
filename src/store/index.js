import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
import  { REFRESH_TOKEN, AUTH_LOGOUT, USER_NAME, AUTH_SIGNIN} from './mutation_types.js'
 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token: localStorage.getItem('user-token') || '',
    // refresh_token: localStorage.getItem('refresh-token') || '',
    // status: '',
    userName: localStorage.getItem('user-name') || '',
    prevUrl:''
  },
  getters: {
    isAuthenticated: state => !!state.userName,
    authStatus: state => state.status,
  },
  mutations: {
    // [AUTH_REQUEST]: (state) => {
    //   state.status = 'loading'
    // },
    // [AUTH_SUCCESS]: (state, token) => {  
    //   state.token = token  
    // },
    // [AUTH_ERROR]: (state) => {
    //   state.status = 'error'
    // },
    [USER_NAME]:(state, name ) => {
      state.userName = name  
    },
    [REFRESH_TOKEN]:(state, token ) => {
      state.refresh_token = token  
    },
    // [PAGE_TRANSATION]:(state) => {
    //   console.log(state.userName)  
    // }
  },
  actions: {
 
    [AUTH_SIGNIN]: ({commit}, users) => {
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
      
    
        api.sign.signIn(users) 
          .then(resp => { 
            let dataObj =  JSON.parse(JSON.stringify(resp.data));
            
            if(dataObj.code == 0){ //success 
      
              const token = dataObj.token 
              
              if(token !== 'undefined') {
  
                localStorage.setItem('user-token', token) // store the token in localstorage
                localStorage.setItem('user-name', dataObj.userName) // store the token in localstorage
                localStorage.setItem('refresh-token', dataObj.refresh_token) 
                commit(USER_NAME, users.user) 
              } 
  
              resolve(resp)
            }
         
          })
        .catch(err => {
        //  alert(JSON.stringify(err)) 
        //   localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
        //   localStorage.removeItem('user-name') 
        //   localStorage.removeItem("refresh-token")
          console.log(err)
          reject(err)
        })
      })

    },
    [AUTH_LOGOUT]: ({commit}) => {
      return new Promise((resolve) => {
        localStorage.removeItem("user-name")
        localStorage.removeItem("user-token")
        localStorage.removeItem("refresh-token")
        
        commit(USER_NAME, "")
        
        resolve()
      })
    }
  },
  modules: {
  }
})

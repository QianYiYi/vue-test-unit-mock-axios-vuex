import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store' // your vuex store 
 
const ifSign = (to, from, next) => { 
  if (store.getters.isAuthenticated && store.getters.isAuthenticated !=="undefined") { 
    next('/book/index') 
  }else {
    //next('/signup') 
    next() 
  }
 
}
 
const BookIndex = () => import(/* webpackChunkName: "book" */ '@/views/BookIndex.vue') 
 
const SignUp = () => import(/* webpackChunkName: "sign" */ '@/views/SignUp.vue') 
 
Vue.use(VueRouter)

const routes = [
  
  { path: '/',
    redirect: '/book/index' , 
  },
  {
    path: '/book/index',
    name: 'BookIndex',
    component: BookIndex, 
    meta:{
      title:'bookIndex'
    }
  },
 
  {
    path: '/signup',
    name: 'signUp',
    component: SignUp,
    beforeEnter: ifSign,
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router

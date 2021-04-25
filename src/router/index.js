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
// router.beforeEach((to, from, next) => {
//   // window.document.title = to.meta.title;
//   console.log(to)
//   // router.beforeEach((to, from, next) => {
//   //   if (to.matched.some(record => record.meta.requiresAuth)) {
//   //     // this route requires auth, check if logged in
//   //     // if not, redirect to login page.
//   //     if (!auth.loggedIn()) {
//   //       next({
//   //         path: '/login',
//   //         query: { redirect: to.fullPath }
//   //       })
//   //     } else {
//   //       next()
//   //     }
//   //   } else {
//   //     next() // 确保一定要调用 next()
//   //   }
//   // })
//   next()
// })
  // router.beforeEach((to, from, next) => {
  //   console.log(to.matched)
  //   console.log(from)
  //   next()
  // })
export default router

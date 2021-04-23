import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store' // your vuex store 
 
 
const ifAuthenticated = (to, from, next) => {
    
  if (store.getters.isAuthenticated && store.getters.isAuthenticated !=="undefined") {
    next()
  }else {
    //next('/signup') 
    next({path:'/signup',query:{url: to.fullPath} }) 
  }
 
}
// import Home from '@/views/Home.vue'
// import BookIndex from '@/views/BookIndex.vue'
// import BookEdit from '@/views/BookEdit.vue'
const BookIndex = () => import(/* webpackChunkName: "book" */ '@/views/BookIndex.vue') 
const BookEdit = () => import(/* webpackChunkName: "book" */ '@/views/BookEdit.vue') 
// import PeopleIndex from '@/views/PeopleIndex.vue'
// import PeopleEdit from '@/views/PeopleEdit.vue'
const PeopleIndex = () => import(/* webpackChunkName: "people" */ '@/views/PeopleIndex.vue') 
const PeopleEdit = () => import(/* webpackChunkName: "people" */ '@/views/PeopleEdit.vue') 
// import PaperIndex from '@/views/PaperIndex.vue'
// import PaperEdit from '@/views/PaperEdit.vue'
const PaperIndex = () => import(/* webpackChunkName: "paper" */ '@/views/PaperIndex.vue') 
const PaperEdit = () => import(/* webpackChunkName: "paper" */ '@/views/PaperEdit.vue') 
// import PatentIndex from '@/views/PatentIndex.vue'
// import PatentEdit from '@/views/PatentEdit.vue'
const PatentIndex = () => import(/* webpackChunkName: "patent" */ '@/views/PatentIndex.vue') 
const PatentEdit = () => import(/* webpackChunkName: "patent" */ '@/views/PatentEdit.vue') 
// import PhotoIndex from '@/views/PhotoIndex.vue'
// import PhotoEdit from '@/views/PhotoEdit.vue'
// import PhotoGallary from '@/views/PhotoGallary.vue'
// import PhotoGallaryEdit from '@/views/PhotoGallaryEdit.vue'
const PhotoIndex = () => import(/* webpackChunkName: "photo" */ '@/views/PhotoIndex.vue') 
const PhotoEdit = () => import(/* webpackChunkName: "photo" */ '@/views/PhotoEdit.vue') 
const PhotoGallary = () => import(/* webpackChunkName: "photo" */ '@/views/PhotoGallary.vue') 
const PhotoGallaryEdit = () => import(/* webpackChunkName: "photo" */ '@/views/PhotoGallaryEdit.vue') 
const SignUp = () => import(/* webpackChunkName: "sign" */ '@/views/SignUp.vue') 
const Foo = () => import(/* webpackChunkName: "foo" */ '@/components/Test.vue') 


// import Test from '@/components/Test.vue'
// import Test4 from '@/components/Test4.vue'
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
    path: '/book/edit',

    name: 'BookEdit',
    component: BookEdit,
    beforeEnter: ifAuthenticated,
  
    meta:{
      title:'bookEdit'
    }
  },
  {
    path: '/people/edit',
    name: 'PeopleEdit',
    component: PeopleEdit,
    beforeEnter: ifAuthenticated,
    meta:{
      title:'peopleEdit'
    }
  },
  {
    path: '/people/index',
    name: 'PeopleIndex',
    component: PeopleIndex,
    
    meta:{
      title:'peopleIndex'
    }
  },
  {
    path: '/paper/index',
    name: 'PaperIndex',
    component: PaperIndex,
    meta:{
      title:'paperIndex'
    }
  },
  {
    path: '/paper/edit',
    name: 'PaperEdit',
    component: PaperEdit,
    beforeEnter: ifAuthenticated,
    meta:{
      title:'PaperEdit'
    }
  },
  {
    path: '/patent/index',
    name: 'PatentIndex',
    component: PatentIndex,
    meta:{
      title:'patentIndex'
    }
  },
  {
    path: '/patent/edit',
    name: 'PatentEdit',
    component: PatentEdit,
    beforeEnter: ifAuthenticated,
    meta:{
      title:'PatentEdit'
    }
  },
  {
    path: '/photo/index',
    name: 'PhotoIndex',
    component: PhotoIndex,
    meta:{
      title:'photoIndex'
    }
  },
  {
    path: '/photo/edit',
    name: 'PhotoEdit',
    component: PhotoEdit,
    beforeEnter: ifAuthenticated,
    meta:{
      title:'photoEdit'
    }
  },
  {
    path: '/photo/gallary/:title',
    name: 'PhotoGallary',
    component: PhotoGallary,
    meta:{
      title:'photogallary'
    }
  },
  {
    path: '/photo/gallaryedit',
    name: 'PhotoGallaryEdit',
    component: PhotoGallaryEdit,
    beforeEnter: ifAuthenticated,
    meta:{
      title:'photoGallaryEdit'
    }
   
  },
  {
    path: '/signup',
    name: 'signUp',
    component: SignUp
   
  },
  {
    path: '/foo',
    component: Foo,
    meta: { requiresAuth: true }
  }
  // {
  //   path: '/book',
  //   name: 'book',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
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

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import api from './api'

// console.log(mock.book())
// import '../public/static/js/bootstrapmb.com.js'
import VueWechatTitle from 'vue-wechat-title'

 
import './theme/element-#D8323F/index.css'
// import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

import ElementUI from 'element-ui'

Vue.use(ElementUI)
 
Vue.use(VueLazyload)
Vue.use(VueWechatTitle)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$api = api 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 
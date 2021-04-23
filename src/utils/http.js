import axios from 'axios';
// import router from '../router';
  // import store from '../store';
  // // import { Toast } from 'vant'; 

  // var init = {

  //   isFresh:false,

  //   generateNewToken(){
  //     var obj = {};
  //     obj.refresh_token = localStorage.getItem("refresh-token")                      
  //     axios.post('http://10.0.2.15:3030/refreshusertoken',obj) 
  //     .then((res) => { 
  //         this.isFresh = true;
  //         console.log(res.data)
  //         localStorage.removeItem("user-token")
  //         localStorage.removeItem("refresh-token")
  //         localStorage.removeItem("user-name")
  //         console.log(res.data.token)
  //         localStorage.setItem("user-token",res.data.token)
  //         localStorage.setItem("refresh-token",res.data.refresh_token) 
  //         localStorage.setItem("user-name",res.data.name) 
  //     })
  
  //   }
  // }
/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
// const tip = msg => {
//   Toast({        
//       message: msg,        
//       duration: 1000,        
//       forbidClick: true    
//   });
// }

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
// const toLogin = () => {
//   router.replace({
//       path: '/login',        
//       query: {
//           redirect: router.currentRoute.fullPath
//       }
//   });
// }
/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
// const errorHandle = (status, other) => {
//   // 状态码判断
//   switch (status) {
//       // 401: 未登录状态，跳转登录页
//       case 401:
//         init.generateNewToken();
//           break;
//       // 403 token过期
//       // 清除token并跳转登录页
//       case 403:
//         init.generateNewToken();
//           break;
//       // 404请求不存在
//       case 404:
//         init.generateNewToken();
//           break;
//       default:
//           console.log(other);   
// }}

// 创意axios实例
var instance = axios.create();
// var instance = axios.create({ timeout: 1000*12 });
// 设置post请求

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// instance.interceptors.request.use(res => {
//     res.headers.common['token'] = localStorage.getItem("token")
//     return res;
// });

/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */ 

instance.interceptors.request.use(    
  config => {        
      // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
      // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
      // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
      // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        
      const token =  localStorage.getItem("user-token");    
      const refresh = localStorage.getItem("refresh-token");
      
      if(token && refresh) {
        config.headers.Authorization = token;    
        config.headers.RefreshToken = refresh;
    
      }
  
      return config; 
  },    
  error => Promise.error(error))

/** 
 * 响应拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */ 
instance.interceptors.response.use(    
  // 请求成功
  res => {
    if(res.data.code == 101) {
      localStorage.removeItem("user-token")
      localStorage.setItem("user-token", res.headers.Authorization)
    }
    return Promise.resolve(res)
  },    
  // 请求失败
  error => {
    console.log(error)
      // const { response } = error;

      // console(      response.config)
      // alert(response.status)
      // if (response.status) {
      //     // 请求已发出，但是不在2xx的范围 
      
      //    errorHandle(response.status, response.data.message);
      //     return Promise.reject(response);
      // } else {
      //     // 处理断网的情况
      //     // eg:请求超时或断网时，更新state的network状态
      //     // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      //     // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      //     if (!window.navigator.onLine) {
      //        store.commit('changeNetwork', false);
      //     } else {
      //         return Promise.reject(error);
      //     }
      // }
  });

export default instance;

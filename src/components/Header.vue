<template>
  <div class="header">
    <div class="container"> 
      <div class="header-height">
        <a class="navbar-brand"></a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :class="{'nav-link':linkBoolean}" to="/book/index">书籍</router-link> 
          </li>
          <li class="nav-item dropdown people-content">
            <a class="nav-link dropdown-toggle" :class="{'nav-link2':linkBoolean2}">
              人员模块
            </a>
            <div class="dropdown-menu display-none" aria-labelledby="navbarDropdown">
              <router-link to="/people/index">公司成员</router-link>
              <router-link to="/paper/index">论文查询</router-link>
              <router-link to="/patent/index">专利查询</router-link>
              <router-link to="/photo/index">照片墙</router-link>

            </div>
          </li>
           
        </ul>

        <div class="name-style" v-if="$store.state.userName">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{  $store.state.userName }} <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">注销</el-dropdown-item> 
            </el-dropdown-menu>
          </el-dropdown>   
  
         
        </div>
    
        <router-link v-else class="sign-up" :to="{path:'/signup',query:{url:this.$route.fullPath}}">登陆</router-link>
          
        </div>
      <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">书籍</el-menu-item>
        <el-submenu index="2">
          <template slot="title">人员模块</template>
          <el-menu-item index="2-1">公司成员</el-menu-item>
          <el-menu-item index="2-2">论文查询</el-menu-item>
          <el-menu-item index="2-3">专利查询</el-menu-item>
          <el-menu-item index="2-3">照片墙</el-menu-item>
        </el-submenu>
      </el-menu> -->
      <!-- <nav class="navbar navbar-expand-lg navbar-light">
       <a class="navbar-brand"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse header-height" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link :class="{'nav-link':linkBoolean}" to="/book/index">书籍</router-link> 
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" :class="{'nav-link2':linkBoolean2}" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                人员模块
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link :class="{'nav-link':linkBoolean}" to="/people/index">公司成员</router-link>
                <router-link :class="{'nav-link':linkBoolean}" to="/paper/index">论文查询</router-link>
                <router-link :class="{'nav-link':linkBoolean}" to="/patent/index">专利查询</router-link>
                <router-link :class="{'nav-link':linkBoolean}" to="/photo/index">照片墙</router-link>
  
              </div>
            </li>
          </ul>
        </div>
      </nav> -->
    </div>
 
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      linkBoolean: true,
      activeIndex: 1,
      linkBoolean2: false
    }
  },
  created() {

    if(this.$route.path == '/' || this.$route.path == '/book/index' || this.$route.path == '/book/edit'){  
      this.linkBoolean2 = false;
    }else { 
      this.linkBoolean2 = true;
    }
 
  },
  mounted(){

    if(this.$route.path =="/book/edit" ) {
      let a = document.querySelectorAll(".nav-item a"); 
      a[0].className = "router-link-exact-active"
    }
    if(this.$route.path =="/people/edit" ) {
      let a = document.querySelectorAll(".nav-item a"); 
      a[2].className = "router-link-exact-active"
    }
    if(this.$route.path =="/paper/edit" ) {
      let a = document.querySelectorAll(".nav-item a"); 
      a[3].className = "router-link-exact-active"
    }
    if(this.$route.path =="/patent/edit" ) {
      let a = document.querySelectorAll(".nav-item a"); 
      a[4].className = "router-link-exact-active"
    }
    console.log(this.$route.path)
    if(this.$route.path =="/photo/edit" || !this.$route.path.indexOf("/photo/gallaryEdit") || !this.$route.path.indexOf("/photo/gallary")) {
      let a = document.querySelectorAll(".nav-item a"); 
      a[5].className = "router-link-exact-active"
    }
  },
  methods: {
    ...mapActions([ 
      'AUTH_LOGOUT',
    ]),
    handleCommand(command) {

      this.AUTH_LOGOUT()
 
      this.$message('click on item ' + command);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
 .header {
  //  background: rgb(251, 235, 236);
   background: rgb(216, 50, 63);
   .container {
     margin: 0 auto;
     width: 80%;
   }
 }
 .dropdown-menu .router-link-exact-active{
   color:red !important;
 }
 
.nav-item .router-link-exact-active{
  // color: #42b983;
  color: #fff;
} 
.nav-link2{
  // color: #42b983;
  color: #fff !important;
} 

.navbar-brand {
  display: block;
  width: 120px;
  height: 66px;
  background: url(../assets/images/logowhite.png) no-repeat center;
}
.el-dropdown {
  cursor: pointer;
  color: #fff; 
  font-weight: 900;
 
} 

.header-height {
  display: flex;
  height:66px;
  align-items: stretch;
  position:relative;
  ul {
    display: flex;
    margin: 0;
    >li {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      padding: 5px 20px;
    

      >a {
        text-decoration: none;
        color: #ffffffc9;
        &:hover {
          color: #fff;
        }
      }
     
      .display-none {
        display:none;
      }
    }

    .people-content{

      position: relative;
      cursor: pointer;

      &:hover .dropdown-menu{ 
        display: block !important;
      }
      .dropdown-menu {
        position: absolute;
        top:100%;
        left:0;
        min-width: 160px;
        border: 1px solid #cdcdcd;
        z-index: 99;
        background: #fff;
        
        a {
          text-decoration: none;
          display: block;
          color: #000;
          padding: 5px 20px;
          transition: all .3s;
          text-align: left;
          &:hover {
            color: #fff;
            background: #e60012;
          }
 
        }
      }
    }
  }
  .sign-up , .name-style{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%,-50%);
    color: #f0f0f0;
    text-decoration: none;
    
    &:hover {
      color:#fff;
    }
  }

}
  .log-out {
    color: #fff;
    font-size: 18px;
  }
</style>

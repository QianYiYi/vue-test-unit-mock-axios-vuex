<template>
  <div class="book-index">
    
    <!-- <Header></Header> -->
    <el-container>
      <el-row :gutter="24" style="width:100%;">
        <el-col :span="12"><div class="grid-content bg-purple-dark"></div></el-col>
        <el-col :span="12" class="form-register">
          <img class="image-style" src="../../public/static/img/testlogo.png" alt="">
          <h3 class="welcome-style">Welcome back!</h3>
          <el-form :model="formInline3" class="demo-form-inline" style="width:45%;">
            <el-form-item label="用户名">
              <el-input v-model="formInline3.user" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="formInline3.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="init"  class="register-btn" type="danger" style="width:100%">登陆</el-button>
            </el-form-item>
         
          </el-form>
          <div class="split-line"></div>

          <a @click="init2" class="register-href">注册</a>
        </el-col>
         
      
      </el-row>
 
    </el-container>
    <!-- <div class="container container-size">
      <input type="text" v-model="formInline.signName" name="name">
      <input type="password" v-model="formInline.signPassword" name="password" >
      <button @click="init">test</button>
    </div>
    <div class="container container-size">
      <input type="text" v-model="formInline2.signName" name="name">
      <input type="password" v-model="formInline2.signPassword" name="password" >
      <button @click="init2">注册</button>
    </div>
     -->
 
   
  </div>
</template>

<script>
// import Header from '@/components/Header.vue'
// import BookTable from '@/components/table/BookTable.vue'
// import PageComponent from '@/components/PageComponent.vue'
import { mapActions } from 'vuex'
export default {
  name: 'BookIndex',
  components: {
    // Header,
    // BookTable,
    // PageComponent
  },
  data(){
    return {
      formInline3:{
        user: '',
        password: ''
      },
      formInline:{
        signName: '',
        signPassword: ''
      },
      formInline2:{
        signName: '',
        signPassword: ''
      },
      prevUrl:''
    }
  },
  created(){
 
  },
  mounted(){
  
  },
  watch: {
    // currentPage(val){
    //   this.tableArrCurrent = this.tableArr.slice((val-1)*10 , val*10)
    // }
 
  },
  methods: {
    ...mapActions([
      'AUTH_SIGNIN', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      'USER_REQUEST'
    ]),

    init(){
      // this.currentPage = 1;
      // let params = {};
      //     params.selectSort = this.selected
      //     params.searchBook = this.bookName
      //     params.searchBuyer = this.bookBuyer 
      this.AUTH_SIGNIN({user:this.formInline3.user.trim(),password: this.formInline3.password.trim()})
      .then( (res) => {  
          if(this.$route.query.url == undefined){
            this.$router.push('/book/index')
          }else {
            this.$router.push(this.$route.query.url)
            
          }
          //this.$router.push(this.$route.query.url)
        }
      )
     
      // this.$api.sign.signIn( this.formInline )
      // .then(res => { 
      //   console.log(res)
      // })
      // .catch(error => console.log("刚开始就出错了,,,,", error)
      // )
    }, // this.$api.sign.signIn( this.formInline )
      // .then(res => { 
      //   console.log(res)
      // })
      // .catch(error => console.log("刚开始就出错了,,,,", error)
      // )
    init2(){
      // this.currentPage = 1;
      // let params = {};
      //     params.selectSort = this.selected
      //     params.searchBook = this.bookName
      //     params.searchBuyer = this.bookBuyer
       
      this.$api.sign.signUp( this.formInline2 )
    
      .catch(error => console.log("刚开始就出错了,,,,", error)
      )
    },
    pageCurrentRe(val){
      console.log(val+"par")
      this.currentPage = val
    },
    test(){

    },
    selectContent(val){  
      console.log(JSON.stringify(val))
      this.init()
    },
    search(){
   
      this.init()
    },
   
    handleCurrentChange(  num ){
				this.currpage = num;
				// this.listLoading = true
				// this.getPrivateTx(this.formData);
		},
 
     
  },
  // beforeRouteEnter(to, from ,next) {
 
  //   next(vm => {
  //       console.log(window.location.host)
  //      vm.prevUrl = from.fullPath 
  //   })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .form-register {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
 .bg-purple-dark {
   background: #d8323f;
   height: 100vh;
 }

.el-pagination {
  text-align: center;
}
.image-style {
  width: 35%; 
  margin-top:100px;
}
.welcome-style {
  color: #a0aec0;
  font-size: 40px;
  font-weight: 900;
  margin-bottom:10px;
}
.split-line {
  margin-top:20px;
  width: 80%;
  border-top: 1px solid rgba(55,63,67,.1);
}
.register-href{
  color:#409eff;
  cursor: pointer;
  &:hover {
    color: #66b1ff;
  }
}
.sign-up {
  color: #f8f8f8;
}
</style>
<style lang="scss" >
body {
    background: #fff !important;
}
.form-register{
  .el-input__inner {
    background-color: #f0f4f8;
  }
  .el-form-item {
    margin-bottom: 10px;
    .el-form-item__label {
      line-height: 30px !important;
    }
  }

  .register-btn {
    margin-top: 20px;
    background: #d8323f;
  }
} 
</style>
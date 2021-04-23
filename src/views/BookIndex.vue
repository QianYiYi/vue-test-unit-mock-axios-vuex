<template>
  <div class="book-index">
    
    <Header></Header>
    <div class="container container-size">
      <br/>
      <br/>
            <!-- <a id="login">Login with GitHub</a> -->
      <el-form :inline="true" :model="formInline" >
        <el-form-item style="width:100px;">
          <el-select v-model="formInline.selectSort" placeholder="请选择"  @change="selectContent">
            <el-option
              v-for="(item, index) in selectOption"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>  
        <el-form-item>
          <el-input v-model="formInline.searchBook" placeholder="请输入书名关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formInline.searchBuyer" placeholder="请输入购买者名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
        </el-form-item>
       
        <div v-if="$store.getters.isAuthenticated" class="book-edit-href"><router-link to="/book/edit"> 编辑</router-link></div>
        
      </el-form>

     <el-table 
        :data="tableArr.slice((currentPage - 1 ) * pageSize, currentPage * pageSize)"
        stripe
        border
        v-loading="listLoading" 
        style="width: 100%"
      >
        <el-table-column
          type="index"
          label="序号" 
          width="50"
        >
          <template scope="scope">
            <span>{{ pageSize * ( currentPage - 1 )+ scope.$index + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="bookName"
          label="书名"
        >
        </el-table-column>
        <el-table-column
          prop="bookVolume"
          label="册数"
          width="50"
        >
        </el-table-column>
        <el-table-column
          prop="bookBuyer"
          label="购买者"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="bookBorrower"
          label="借记人"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="buyTime"
          label="购买日期"
          width="150"
        >
        </el-table-column> 
      </el-table>  
      <br> 
      <el-pagination
					background 
					:current-page.sync="currentPage"  
					layout="prev, pager, next, jumper"
					:total="Number(tableArr.length)"
			>
			</el-pagination>
      <!-- <book-table :table-data="tableArrCurrent" :current-page="currentPage"></book-table>
      <page-component :table-data="tableArr" v-on:pageCurrent="pageCurrentRe"></page-component> -->
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
// import BookTable from '@/components/table/BookTable.vue'
// import PageComponent from '@/components/PageComponent.vue'

export default {
  name: 'BookIndex',
  components: {
    Header,
    // BookTable,
    // PageComponent
  },
  data(){
    return {
      value:"",
      tableArr: [],
      currentPage:1,
      listLoading: true,
      pageSize: 10,
      selectOption: ["在录","过期","未过期"], 
      formInline:{
        selectSort: "在录",
        searchBook: '',
        searchBuyer: ''
      }
    }
  },
  created(){
    // this.init()
  },
  mounted(){
      this.init()
 
  },
  watch: {
    // currentPage(val){
    //   this.tableArrCurrent = this.tableArr.slice((val-1)*10 , val*10)
    // }
  },
  methods: {
 
    init(){
      // this.currentPage = 1;
      // let params = {};
      //     params.selectSort = this.selected
      //     params.searchBook = this.bookName
      //     params.searchBuyer = this.bookBuyer
       
      this.$api.book.bookList(this.formInline)
      .then(res => {
        this.listLoading = false;
        this.tableArr = res.data.data;
      })
      .catch(error => console.log("刚开始就出错了,,,,", error)
      )

    
         
    },
    pageCurrentRe(val){
      console.log(val+"par")
      this.currentPage = val
    },
    selectContent(val){ 

      console.log(JSON.stringify(val))
      this.init()
    },
    search(){
   
      this.init()
    },
    // handleCurrentChange(  num ){
		// 		this.currpage = num;
		// 		// this.listLoading = true
		// 		// this.getPrivateTx(this.formData);
		// },
 
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 
  .el-pagination {
    text-align: center;
  }

</style>

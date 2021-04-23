import { mount, createLocalVue, RouterLinkStub} from "@vue/test-utils";


import Sample from "@/views/BookIndex.vue"; 

import mockAxios from "axios";
//axios 接口文件
import api from '@/api'
//vuex 文件
import vuextest from '@/store'
 // elementui 组件
import ElementUI from 'element-ui'

const localVue = createLocalVue()
//挂载elementui
localVue.use(ElementUI)
 
//模拟Header里面的this.$route.path
const routes = {
   path: '/test',
   component: Sample, 
}; 
//模拟 this.$router.push ，（暂时未用到）
const routertest= {
  push: jest.fn(),
}
 
const booklist = api  

describe("Sample.vue", () => {
  //模拟返回的数据
  const response = {
    data:{
      data:[    //这个data的属性名和.vue文件中axios中res.data.data;的第二个data名称是一样的
        {"bookId":10100,"bookName":"w_1","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_2","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_3","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_4","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_5","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_6","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_7","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_8","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_9","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_10","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_11","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_12","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1},
        {"bookId":10100,"bookName":"w_13","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1343},
        {"bookId":10100,"bookName":"were","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":123123},
        {"bookId":10100,"bookName":"wer","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":1322},
        {"bookId":10100,"bookName":"wer","buyTime":"2021/02/28","bookBuyer":"华松","bookBorrower":"周恩策","bookVolume":12}
      ]
    } 
  };
 //模拟调用的axios接口
  mockAxios.get.mockReturnValue(Promise.resolve(response));

  const wrapper = mount(Sample, {
    sync: false,
    localVue, 
    // router,          
    mocks: { 
      $route: routes, 
      $router: routertest,    
      $api: booklist,
      $store: vuextest
    },
    stubs: { 
      'router-link': RouterLinkStub ,
      // 'Header':Header
    },
  });

  it("axios store", async() => {

    expect(wrapper.exists()).toBe(true);
    //get 是否调用了一次
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
 
    expect(mockAxios.get).toBeCalledWith(
      "http://10.0.2.15:3030/findbook/all", {"params": {"searchBook": "", "searchBuyer": "", "selectSort": "在录"}}
    );

    // 点击搜索，也调用了一次
    await wrapper.find('button').trigger('click',{button: 0})
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    //点击分页的第二页，测试是否有点击
    var letsrf =  wrapper.findAll('.el-pager .number').at(1)
 
    letsrf.trigger('click')
    await wrapper.vm.$nextTick()
    console.log(letsrf.text()); 
 
    //snapshot生存dom的
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.vm.tableArr.length).toBe(1);
    wrapper.destroy()
  });

 

});


/**
 *book模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const book = {    
    // book list    
    bookList (params) {        
        return axios.get(`${base.db}/findbook/all`, {            
            params: params        
        });    
    },    
    // insert book details 
    bookInsert (params) {        
        return axios.post(`${base.db}/findbook/insert`, params);    
    },
    // update book informations    
    bookUpdate (params) {        
        return axios.post(`${base.db}/findbook/update`, params);     
    },
    // delete book 
    bookDelete(params) {
        return axios.post(`${base.db}/findbook/deleteBook`, params)
    },
    bookAuto(params) {
        return axios.post(`${base.db}/uploadExcel`, params)
    },
}

export default book;

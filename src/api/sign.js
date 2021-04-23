/**
 *sign模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
// import { config } from 'vue/types/umd';
// import qs from 'qs'; // 根据需求是否导入qs模块

const sign = {    
    // photo list    
    signIn (params) {        
        return axios.post(
                        `${base.db}/signin`,
                        params 
                    );    
    },   
    signUp (params) {        
        return axios.post(
            `${base.db}/signup`,
             params 
        );    
    }
    
}

export default sign;

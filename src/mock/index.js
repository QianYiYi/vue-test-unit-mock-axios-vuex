

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Books from './datas/book.js';
// import people from './people';
// import paper from './paper';
// import patent from './patent';
// import photo from './photo';
// import sign from './sign';
var mock = new MockAdapter(axios)
        
mock.onGet('/findbook/all').reply(200, {
    code: 1001, msg: '请求成功', data: Books.list
}) 
 
 export default mock;
    
// const mockAxios = jest.genMockFromModule('axios')

// // this is the key to fix the axios.create() undefined error!
// mockAxios.create = jest.fn(() => mockAxios)
 
// export default mockAxios
// const axios = {
//     get: jest.fn(() => Promise.resolve({ data:[{"bookName":"test2","bookVolume":"2","bookBuyer":"zhou","bookBorrower":"liu","buyTime":"2006-12-30"}]  })),
//     create: () => axios,
//     defaults: {
//       adapter: {},
//     },
//   };
  
//   export default axios;

const mockAxios = jest.genMockFromModule('axios')

// this is the key to fix the axios.create() undefined error!
mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios
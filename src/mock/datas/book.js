
import Mock from "mockjs"
 
// const Books = []
// for (let i=0; i<10; i++){
//     Books.push(Mock.mock({
//         book_name: Mock.Random.integer(60, 100),
//         book_volume: Mock.Random.cparagraph(10,20),
//         book_buyer: Mock.Random.image('200x100', '#4A7BF7',i),
//         book_borrower: Mock.Random.image('200x100', '#4A7BF7',i),
//         buy_time: Mock.Random.image('200x100', '#4A7BF7',i)
//     }))
// }
 
var Books = Mock.mock({
    "list|1-10": [
      {
        "bookName|+1": [
            "test2",
            "aaaaa",
            "vvvvvvvvv"
        ],
        "bookVolume|+1": [
            "2",
            "3",
            "1"
        ],
        "bookBuyer|+1": [
            "zhou",
            "wang",
            "zheng"
        ],
        "bookBorrower|+1": [
            "liu",
            "wu",
            "zheng"
        ],
        "buyTime|+1": Mock.mock('@date')
      }
    ]
  })
  
 
export default Books
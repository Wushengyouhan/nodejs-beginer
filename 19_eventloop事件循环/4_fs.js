import fs from 'fs'

const __filename = 'test.txt'

fs.readFile(__filename, () => {
  console.log(3)
  Promise.resolve().then(() => {
    console.log(3)
  })
})

fs.readFile(__filename, () => {
  console.log(4)
  Promise.resolve().then(() => {
    console.log(4)
  })
})

setTimeout(() => {
  console.log(2)
}, 0)

console.log(1)

// 输出结果有2种，取决于哪个异步IO事件先被系统处理完
// 124433
// 123344

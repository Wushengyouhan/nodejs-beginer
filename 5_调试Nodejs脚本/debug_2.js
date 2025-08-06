// 声明一个名为 print 的函数，用于打印传入的值
function print(value) {
  console.log('print', value) // 输出传入的值
  console.log('2')
  console.log('3')
  console.log('4')
  console.log('5')
  console.log('6')
  console.log('7')
  console.log('8')
  console.log('9')
  console.log('10')
}
// 声明一个数组并初始化
const myArray = [1, 2, 3, 4, 5]
// 声明一个对象并初始化
const myObject = {
  name: 'Alice',
  age: 30,
  city: 'New York'
}

// 调用 print 函数，传入 myArray 作为参数，打印 myArray
print(myArray)
// 调用 print 函数，传入 myObject 作为参数，打印 myObject
print(myObject)

print('结束')

import { readFile } from 'fs'

console.log(1)
readFile('test.txt', () => {
  console.log(3)
})
console.log(2)
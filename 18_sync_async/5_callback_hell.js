import fs from 'fs'

const fileA = 'test.txt'
const fileB = 'test.txt'
const fileC = 'test.txt'
fs.readFile(fileA, (err, dataA) => {
  console.log('File A content:')

  fs.readFile(fileB, (err, dataB) => {
    console.log('File B content:')

    fs.readFile(fileC, (err, dataC) => {
      console.log('File C content:')
    })
  })
})
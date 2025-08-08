import fs from 'fs'

const files = fs.readdirSync('../13_fs文件系统', { withFileTypes: true })
// console.log(files.map((f) => ({ name: f.name, isDirectory: f.isDirectory() })))
console.log(files)

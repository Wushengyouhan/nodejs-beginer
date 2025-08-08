import fs from 'fs'

// 把文件移动到上一级目录·
fs.renameSync('test.txt', '../test.txt')

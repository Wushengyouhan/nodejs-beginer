import fs from 'fs'
import path from 'path'

function getAllFiles(dirPath, arrayOfFiles) {
  // 读取当前目录下的所有文件
  const files = fs.readdirSync(dirPath, { withFileTypes: true })
  // 初始化数组
  arrayOfFiles = arrayOfFiles || []

  files.forEach((file) => {
    if (file.isDirectory()) {
      // 递归读取子目录
      getAllFiles(path.resolve(dirPath, file.name), arrayOfFiles)
    } else {
      // 将当前目录和文件名拼接成绝对路径，推入数组
      arrayOfFiles.push(path.resolve(dirPath, file.name))
    }
  })

  return arrayOfFiles
}

// 获取当前目录下所有文件
console.log(getAllFiles('./'))
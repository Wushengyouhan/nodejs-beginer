import fs from 'fs'

const txtContent = fs.readFileSync('./test.txt', 'utf-8')
console.log(txtContent);

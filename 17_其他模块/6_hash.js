import crypto from 'crypto'

const testStr = 'hello world'
const sha256 = crypto.createHash('sha256').update(testStr).digest('hex')
console.log('sha256:', sha256)

const md5 = crypto.createHash('md5').update(testStr).digest('hex')
console.log('md5:', md5)

const sha512 = crypto.createHash('sha512').update(testStr).digest('hex')
console.log('sha512:', sha512)
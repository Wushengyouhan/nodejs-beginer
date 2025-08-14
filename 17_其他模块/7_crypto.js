import crypto from 'crypto'

// 定义加密算法和密钥，生成随机密码和向量
const algorithm = 'aes-256-cbc'
const password = crypto.randomBytes(32) // 生成随机 32 字节的密码
const iv = crypto.randomBytes(16) // 生成随机 16 字节的向量

// 待加密的数据
const data = 'Hello, World!'
console.log('Original data:', data)

// 创建加密算法实例
const cipher = crypto.createCipheriv(algorithm, password, iv)

// 使用 update 方法对数据进行加密
let encrypted = cipher.update(data, 'utf8', 'hex')
// 加密后的数据以十六进制形式(即字符串)返回
encrypted += cipher.final('hex')

console.log('Encrypted data:', encrypted)

// 创建解密算法实例
const decipher = crypto.createDecipheriv(algorithm, password, iv)

// 使用 update 方法对数据进行解密
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
// 返回解密后的字符串 utf8编码
decrypted += decipher.final('utf8')

console.log('Decrypted data:', decrypted)
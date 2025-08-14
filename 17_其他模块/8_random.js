import crypto from 'crypto'

console.log('crypto.randomBytes(32).toString(hex):', crypto.randomBytes(32).toString('hex'))
console.log('crypto.randomBytes(8).toString(hex):', crypto.randomBytes(8).toString('hex'))
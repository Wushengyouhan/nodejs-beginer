// ESM 中使用 CJS 模块

import { createRequire } from 'module'

const require = createRequire(import.meta.url)

console.log(require('../package.json').name)
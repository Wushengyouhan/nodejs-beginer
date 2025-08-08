import path from 'path'

console.log('=== path.normalize ===')
console.log('原始路径:', 'a//b//c/d/e/..')
console.log('标准化后:', path.normalize('a//b//c/d/e/..'))

console.log('\n=== 更多标准化示例 ===')
console.log('多个斜杠:', path.normalize('a///b///c'))
console.log('当前目录:', path.normalize('a/b/./c'))
console.log('上级目录:', path.normalize('a/b/../c'))
console.log('混合操作:', path.normalize('a/b/./c/../d'))
console.log('绝对路径:', path.normalize('/a/b//c/d/../e'))
console.log('相对路径:', path.normalize('./a/b/../c'))
console.log('复杂路径:', path.normalize('a/b/./c/../d/./e/../f'))

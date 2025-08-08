import path from 'path'

console.log('=== path.sep ===')
console.log('foo/bar/baz'.split(path.sep))
const dir = 'users'
const file = 'index.html'
console.log(dir + path.sep + file)

import url from 'url'

const testUrl = 'https://www.baidu.com?search=juejin'
console.log('url.URL === URL', url.URL === URL)

const urlObj = new URL(testUrl)
// 获取完整URL
console.log(urlObj);
// 获取查询参数
console.log(urlObj.searchParams.get('search'));






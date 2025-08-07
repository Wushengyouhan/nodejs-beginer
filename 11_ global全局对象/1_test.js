console.log(globalThis === global);

global.userInfo = {
  name: '张三',
  age: 18,
}

console.log(Object.getOwnPropertyNames(global));
console.log(userInfo);

// 创建一个长度为 10 的 Buffer 实例并将它填充为 0
const buf = Buffer.alloc(10);

// 将字符串 'Hello' 写入 Buffer 实例的前 5 个字节
buf.write('Hello');

// 打印buffer对象 输出 <Buffer 48 65 6c 6c 6f 00 00 00 00 00>
console.log(buf);

// 将字符串 'world' 写入 Buffer 实例的第 6 个字节开始的位置，由于 'world' 的长度为 5，所以不会覆盖掉之前写入的 'Hello'
buf.write('world', 5); 

// 打印buffer对象 输出 <Buffer 48 65 6c 6c 6f 77 6f 72 6c 64>
console.log(buf);

// 将 Buffer 实例转换为字符串并输出 'Hello world'
console.log(buf.toString()); 

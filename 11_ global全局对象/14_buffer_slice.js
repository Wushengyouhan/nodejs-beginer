const buf = Buffer.from('Hello, world!');
const buf2 = buf.subarray(0, 5);
console.log(buf2.toString()); // 输出 'Hello'

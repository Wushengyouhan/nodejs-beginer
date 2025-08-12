import http from "http";

const server = http.createServer((req, res) => {
  // 获取请求的路径和方法
  const { url, method } = req;
  // 将searchParams转成对象
  const query = Object.fromEntries(
    // 新建URL对象，读取searchParams
    new URL(url, 'http://localhost').searchParams
  )
  console.log('query:', query);
  
  
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1>");
});
server.listen(4275, () => {
  console.log("Server running at http://127.0.0.1:4275/");
});
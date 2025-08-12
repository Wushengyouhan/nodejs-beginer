import http from "http";

const server = http.createServer((req, res) => {
  // 获取请求的路径和方法
  const { url, method } = req;
  console.log(method, url);
  
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1>");
});
server.listen(4275, () => {
  console.log("Server running at http://127.0.0.1:4275/");
});

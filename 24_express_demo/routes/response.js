// routes/response.js
import express from "express";
import path from 'path'

const router = express.Router();

// 1. res.json()
router.get("/response/json", (req, res) => {
  res.json({
    name: "express",
    type: "framework",
  });
});

// 2. res.send()
router.get('/response/send', (req, res) => {
  // html
  res.send('<h1>hello express</h1>')

  // json
  //   res.send({
  //     name: 'express',
  //     type: 'framework'
  //   })

  // string
  // res.send('hello express')

  // Buffer
  // res.send(Buffer.from('hello express'))
})

// res.download()
router.get('/response/download', (req, res) => {
  // 指定文件路径
  // res.download('package.json')
  res.download(path.resolve('./package.json'))
})


export default router;

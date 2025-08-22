import express from "express";

const router = express.Router();

// 1.req.headers
router.get('/response/get/header', (req, res) => {
  res.json(req.headers)
})

// 2.res.setHeader()
router.get('/response/set/header', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.set('token', '123456')
  res.send('<h1>hello express</h1>')
})
export default router;
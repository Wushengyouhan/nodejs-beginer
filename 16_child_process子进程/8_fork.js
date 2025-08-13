import { fork } from 'child_process'

const child = fork('./7_child.js') // 使用 fork() 方法创建子进程

child.on('message', (msg) => {
  // 监听来自子进程的消息
  console.log(`Message from child: ${msg}`)
})

child.send('Hello from parent!') // 向子进程发送消息

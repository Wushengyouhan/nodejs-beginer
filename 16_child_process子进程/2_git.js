import ChildProcess from 'child_process'

const { spawn, spawnSync } = ChildProcess
const file = './../15_http'
const spawnProcess = spawn('git', ['log', '-1', '--pretty="%ci"', file])
spawnProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
  console.log(new Date(data))
})
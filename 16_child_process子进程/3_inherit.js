import ChildProcess from "child_process";

const { spawn, spawnSync } = ChildProcess;

spawnSync('pwd', {
  stdio: 'inherit'
})

spawn('ls', {
  stdio: 'inherit'
})


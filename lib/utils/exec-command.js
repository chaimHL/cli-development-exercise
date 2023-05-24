const { spawn } = require('child_process')
function execCommand(...args) {
  return new Promise(resolve => {
    // 开启子进程
    const childProcess = spawn(...args)

    // 获取子进程的输出
    childProcess.stdout.pipe(process.stdout)
    // 获取子进程的错误
    childProcess.stderr.pipe(process.stderr)

    childProcess.on('close', () => {
      resolve()
    })
  })
}

module.exports = execCommand

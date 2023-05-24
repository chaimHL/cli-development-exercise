const { program } = require('commander')
function setOptions() {
  const version = require('../../package.json').version
  program.version(version, '-v --version')
  program.option('-b --blg <char>', '打个lck闹麻了')
  program.option('-d --dest <dest>', '指定目录，例如 -d src')

  program.on('--help', () => {
    console.log('') // 空行
    console.log('友情小提示')
    console.log('  balabala') // 空两格更好看
  })
}

module.exports = setOptions

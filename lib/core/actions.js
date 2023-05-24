const fs = require('fs')
const { promisify } = require('util')
const { program } = require('commander')
const execCommand = require('../utils/exec-command')
const compileEjs = require('../utils/compile-ejs')
const download = promisify(require('download-git-repo'))

async function createVue(project) {
  try {
    await download(
      'direct:https://gitee.com/chaimhl/vue3-ts-todolist-exercise.git',
      project,
      {
        clone: true
      }
    )

    const commandName = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await execCommand(commandName, ['install'], { cwd: `./${project}` })
    await execCommand(commandName, ['run', 'serve'], { cwd: `./${project}` })
  } catch (error) {
    console.log(error)
  }
}

async function addComponent(name) {
  try {
    // 得到组件
    const result = await compileEjs('component.vue.ejs', { name })

    // 将组件写入到对应目录下
    const dest = program.opts().dest || 'src/components'
    await fs.promises.writeFile(`${dest}/${name}.vue`, result)
    console.log('创建成功')
  } catch (error) {
    console.log(err)
  }
}

module.exports = {
  createVue,
  addComponent
}

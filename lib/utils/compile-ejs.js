const path = require('path')
const ejs = require('ejs')

function compileEjs(fileName, data) {
  return new Promise((resolve, reject) => {
    // 获取模板路径（绝对路径）
    const templatePath = path.resolve(__dirname, `../template/${fileName}`)

    // 使用 ejs 引擎编译模板
    ejs.renderFile(templatePath, data, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      console.log(result)
      resolve(result)
    })
  })
}

module.exports = compileEjs

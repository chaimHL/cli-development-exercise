#!/usr/bin/env node
// lib\index.js
const { program } = require('commander')
const setOptions = require('./core/options')
const { createVue, addComponent } = require('./core/actions')
setOptions()

program
  .command('create <project> [...args]')
  .description('用于创建 vue 项目')
  .action((project, version) => {
    // console.log(project, version)
    createVue(project)
  })

program
  .command('addComponent <name> [...args]')
  .description('用于创建组件')
  .action(name => {
    addComponent(name)
  })

program.parse(process.argv)
// console.log(program.opts().blg)

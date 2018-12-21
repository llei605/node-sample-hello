/**
 * 1. 显示文件名称
 */
const {basename, dirname, extname} = require('path')

const fileFullName = 'c:/111/aaa.txt'
let fileBaseName = () => {
    console.log('basename is : ' + basename(fileFullName))
    console.log('dirname is : ' + dirname(fileFullName))
    console.log('extname is : ' + extname(fileFullName))
}

module.exports.fileName = fileBaseName
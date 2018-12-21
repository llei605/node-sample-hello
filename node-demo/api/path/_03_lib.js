/**
 * 03. 路径拼接
 */
const {join} = require('path')

const folder1 = 'aaa'
const folder2 = '/bbb' // 系统会自动处理斜线
const folder3 = 'ccc'

const dirPath = () => {
    console.log(join(folder1, folder2, folder3)) 
}

module.exports.dirPath = dirPath
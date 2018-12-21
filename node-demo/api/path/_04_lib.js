/**
 * 04. 解析当前路径的绝对路径
 */
const {resolve} = require('path')

const dirFullPath = () => {
    console.log(resolve('./'))
}

module.exports.dirPath = dirFullPath
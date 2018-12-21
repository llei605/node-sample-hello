/**
 * 2. 规范不规范的路径
 */

const {normalize} = require('path')

const fileFullName = () => {
    console.log(normalize('c://111/aaa.txt'))
}

module.exports.fileName = fileFullName
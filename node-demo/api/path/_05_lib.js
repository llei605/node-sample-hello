
const {parse, format} = require('path')

const fileFullName = 'c:/111/aaa.txt'
const parseValue = parse(fileFullName)

const fileName = () => {
    console.log(parseValue)
    console.log(format(parseValue))
}

module.exports.fileName = fileName
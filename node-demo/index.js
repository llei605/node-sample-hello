const lib1 = require('./api/path/_01_lib')
const lib2 = require('./api/path/_02_lib')
const lib3 = require('./api/path/_03_lib')
const lib4 = require('./api/path/_04_lib')
const lib5 = require('./api/path/_05_lib')

/**
 * 核心API： path
 */
// 01 - 显示文件名
lib1.fileName()

// 02 - 规范不规范的路径
lib2.fileName()

// 03 - 路径拼接
lib3.dirPath()

// 04 - 显示绝对路径
lib4.dirPath()

// 05 - parse和format
lib5.fileName()

const path = require('path')

const { getStackFileNames } = require('./getStackFileNames')
const { readHelperOptions } = require('./readHelperOptions')

exports.readPath = (filePath, options = {}) => {

  options = readHelperOptions(options, {
    stackFileNames: getStackFileNames()
  })

  if (/^(\.+(\/|\\)?)/.test(filePath)) {
    const { stackFileNames } = options

    const [stackFileName = null] = stackFileNames

    if (stackFileName) {
      const stackFileDirName = path.dirname(stackFileName)

      return path.join(stackFileDirName, filePath)
    }
  }

  return filePath
}

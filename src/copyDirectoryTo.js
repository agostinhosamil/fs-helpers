const path = require('path')

const { isDir } = require("./isDir")
const { readPath } = require("./readPath")
const { copyFileTo } = require("./copyFileTo")
const { getStackFileNames } = require('./getStackFileNames')
const { readHelperOptions } = require("./readHelperOptions")
const { getFileRelativePath } = require('./getFileRelativePath')
const { getDirectoryFilesList } = require('./getDirectoryFilesList')

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.copyDirectoryTo = copyDirectoryTo

function copyDirectoryTo(options = {}) {
  const stackFileNames = getStackFileNames({ __filename })

  options = readHelperOptions(options, {
    dest: '',
    dirPath: '',

    each: () => 0,
    afterEach: () => 0,
    beforeEach: () => 0,
    map: ({ filePath }) => (
      filePath
    )
  })

  const dirPath = readPath(options.dirPath, { stackFileNames })
  const destinationPath = readPath(options.dest, { stackFileNames })

  if (!isDir(dirPath)) {
    throw new Error(`${dirPath} is not a valid directory path`)
  }

  const dirFilesList = getDirectoryFilesList(dirPath)

  for (const dirFile of dirFilesList) {
    options.each({ filePath: dirFile })
    options.beforeEach({ filePath: dirFile })

    const dirFileRelativePath = getFileRelativePath(dirPath, dirFile)

    const fileDestinationAbsolutePath = options.map({
      filePath: path.join(destinationPath, dirFileRelativePath)
    })

    try {
      copyFileTo({
        filePath: dirFile,
        dest: fileDestinationAbsolutePath
      })
    } catch (err) {
    } finally {
      options.afterEach({
        filePath: fileDestinationAbsolutePath,
        oldFilePath: dirFile
      })
    }
  }
}

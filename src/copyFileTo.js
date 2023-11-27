const fs = require('fs')
const path = require('path')

const { readPath } = require('./readPath')
const { createDir } = require('./createDir')
const { getStackFileNames } = require('./getStackFileNames')
const { getAbsoluteFileDestinationPath } = require('./getAbsoluteFileDestinationPath')

exports.copyFileTo = copyFileTo

function copyFileTo({ filePath, ...options }) {
  const stackFileNames = getStackFileNames({ __filename })
  const absoluteFilePath = readPath(filePath, { stackFileNames })
  const absoluteFileDestinationPath = getAbsoluteFileDestinationPath({
    filePath: absoluteFilePath,
    options: {
      ...options,
      stackFileNames
    }
  })

  if (!fs.existsSync(absoluteFilePath)) {
    throw new Error(`path: ${filePath} is not a valid file path!`)
  }

  createDir(path.dirname(absoluteFileDestinationPath))

  try {
    fs.copyFileSync(absoluteFilePath, absoluteFileDestinationPath)
  } catch (err) {
  } finally {
    return absoluteFileDestinationPath
  }
}

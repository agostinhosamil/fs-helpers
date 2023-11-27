const fs = require('fs')
const path = require('path')

const { isDir } = require("./isDir")
const { readHelperOptions } = require("./readHelperOptions")

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.getDirectoryFilesList = getDirectoryFilesList

function getDirectoryFilesList(dirPath, options = {}) {
  if (!isDir(dirPath)) {
    throw new Error(`'${dirPath}' is not a valid directory path.`)
  }

  options = readHelperOptions(options, {
    includeSubdirectories: true,

    directoryPathsMap: (directoryPath) => {
      return directoryPath
    }
  })

  const directoryFilesList = []

  const directoryContentList = fs.readdirSync(dirPath)

  for (const directoryContent of directoryContentList) {
    const directoryContentPath = path.resolve(dirPath, directoryContent)

    if (isDir(directoryContentPath) && (options.includeSubdirectories || options.recursive)) {
      const subdirectoryContentList = getDirectoryFilesList(directoryContentPath, options)

      if (subdirectoryContentList instanceof Array) {
        for (const subdirectoryContent of subdirectoryContentList) {
          directoryFilesList.push(subdirectoryContent)
        }
      }

      continue
    }

    directoryFilesList.push(options.directoryPathsMap(directoryContentPath))
  }

  return directoryFilesList
}

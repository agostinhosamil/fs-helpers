const fs = require('fs')
const path = require('path')

const { isDir } = require('./isDir')
const { readPath } = require('./readPath')

exports.createDir = (dirAbsolutePath) => {
  const slashRe = /(\/|\\+)/

  if (typeof dirAbsolutePath !== typeof 'str') {
    throw new Error('directory path must be a string')
  }

  dirAbsolutePath = readPath(dirAbsolutePath)

  if (/(win32)/i.test(process.platform)) {
    dirAbsolutePath = dirAbsolutePath.replace(/^([a-zA-Z0-9_]:)/, '')
  }

  const dirAbsolutePathReducer = (prev, current, index, arr) => {
    const currentDirPath = ['', prev, current].join(path.sep)

    if (fs.existsSync(currentDirPath) &&
      !isDir(currentDirPath) &&
      index < (-1 + arr.length)) {
      throw new Error('Not a directory')
    }

    if (!fs.existsSync(currentDirPath)) {
      fs.mkdirSync(currentDirPath)
    }

    return [prev, current].join(path.sep)
  }

  dirAbsolutePath = dirAbsolutePath
    .replace(/^(\\|\/)+/, '')
    .split(slashRe)
    .filter(slice => !/^(\\|\/)$/.test(slice))
    .reduce(dirAbsolutePathReducer)

  return (['', dirAbsolutePath].join(path.sep))
}

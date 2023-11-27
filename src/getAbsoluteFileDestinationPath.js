const path = require('path')

const { readPath } = require('./readPath')
const { isValidPath } = require('./isValidPath')

exports.getAbsoluteFileDestinationPath = ({ filePath, options }) => {

  if (isValidPath(options.dest)) {
    return readPath(options.dest, options)
  }

  const destinationFilePath = [
    readPath(options.destDir, options),
    isValidPath(options.destName)
      ? options.destName
      : path.basename(filePath)
  ]

  return path.join.apply(path, destinationFilePath)
}

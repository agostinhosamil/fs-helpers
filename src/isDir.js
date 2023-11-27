const fs = require('fs')

exports.isDir = function isDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    try {
      fs.readdirSync(dirPath)

      return true
    } catch (err) {
    }
  }

  return false
}

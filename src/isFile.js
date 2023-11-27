const fs = require('fs')

exports.isFile = function isFile(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      fs.readFileSync(filePath)

      return true
    } catch (err) {
    }
  }

  return false
}

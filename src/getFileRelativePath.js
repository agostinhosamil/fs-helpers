Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.getFileRelativePath = getFileRelativePath

function getFileRelativePath(fileParentDirPath, filePath = '') {
  if (!(typeof fileParentDirPath === typeof 'str' &&
    typeof filePath === typeof 'str')) {
    throw new TypeError('both file parent dir and file path must to be strings')
  }

  const filePathHead = filePath.slice(0, fileParentDirPath.length)
  const filePathTail = filePath.slice(fileParentDirPath.length)

  if (!(filePathHead === fileParentDirPath)) {
    throw new Error(`'${filePath}' is not inside '${fileParentDirPath}' directory`)
  }

  return filePathTail
}

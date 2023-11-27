exports.isValidPath = (filePath) => Boolean(
  typeof filePath === typeof 'str' &&
  /\S/.test(filePath)
)

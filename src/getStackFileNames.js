const { readHelperOptions } = require('./readHelperOptions')

exports.getStackFileNames = (options = {}) => {
  const err = new Error()
  const lineNumberRefRe = /(:[0-9]+)+\)?$/

  const defaultOptions = {
    skipCurrentFile: true,
    __filename: ''
  }

  options = readHelperOptions(options, defaultOptions)

  const stackFileNames = err.stack.split(/\n+/)
    .filter(line => typeof line === typeof 'str' && /\S/.test(line))
    .map(line => line.replace(/^([^(]+)/, ''))
    .filter(line => lineNumberRefRe.test(line))
    .map(line => line.substring(1, -1 + line.length))
    .map(line => line.replace(lineNumberRefRe, ''))
    .filter(lineFilePath => !options.skipCurrentFile || lineFilePath !== __filename)

  if (/\S/.test(options.__filename)) {
    const fileNameStackIndex = stackFileNames.indexOf(options.__filename)

    if (fileNameStackIndex >= 0) {
      return stackFileNames.slice(fileNameStackIndex + 1)
    }
  }

  return stackFileNames
}

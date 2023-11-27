exports.readHelperOptions = (helperOptions, defaultOptions = {}) => {
  if (typeof helperOptions !== 'object') {
    throw new TypeError('helper options must be a valid object')
  }

  if (typeof defaultOptions === 'object') {
    for (const key in defaultOptions) {
      if (typeof undefined === typeof helperOptions[key] ||
        typeof defaultOptions[key] !== typeof helperOptions[key]) {
        helperOptions[key] = defaultOptions[key]
      }
    }
  }

  return helperOptions
}

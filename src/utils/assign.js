Object.assignPolyfill = function (target, ...sources) {
  if (target === null || target === undefined) {
    throw Error('target must be variable')
  }
  let to = Object(target)
  sources.forEach(source => {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const value = source[key]
        to[key] = value
      }
    }
  })
  return to
}

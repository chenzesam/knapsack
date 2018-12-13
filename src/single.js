const single = function (Single, ...args) {
  let instance = null
  return function () {
    if (!instance) {
      instance = new Single(...args)
    }
    return instance
  }
}

export default single

const single = function (Obj, ...args) {
  let instance = null
  return function () {
    if (!instance) {
      instance = new Obj(...args)
    }
    return instance
  }
}

export default single

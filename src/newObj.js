const newObj = (object, ...rest) => {
  let obj = {}
  let result = null
  obj.__proto__ = object.prototype
  result = object.apply(obj, rest)
  return typeof result === 'object' ? result : obj
}

export default newObj

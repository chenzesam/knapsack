const newObj = (Obj, ...rest) => {
  let obj = {}

  obj.__proto__ = Obj.prototype
  Obj.apply(obj, rest)

  return obj
}

export default newObj

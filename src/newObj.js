/**
 * @description new 的过程
 * @param {object} Obj 对象
 * @param {any:[]} rest 参数
 * @returns {object}
 */
function newObj (Obj, ...rest) {
  let obj = {}

  obj.__proto__ = Obj.prototype
  Obj.apply(obj, rest)

  return obj
}

export default newObj

/**
 * @description new 的过程
 * @param {object} Obj 对象
 * @param {any:[]} rest 参数
 * @returns {object}
 */
function newObj (Obj, ...rest) {
  let obj = {}

  obj.__proto__ = Obj.prototype
  const res = Obj.apply(obj, rest)

  // 这里的 res 会根据 Obj 构造函数的返回值而定
  // Obj 一般有两种情况: 1. 返回基础值 2. 返回其他对象（通过判断）
  // 情况 1 下, 则相当于正常的 new 返回 this
  // 情况 2 下, 则返回一个新的 object
  // 所以需要判断一下构造函数是否返回了 object（情况二）从而进行 return
  return typeof res === 'object' ? res : obj
}

export default newObj

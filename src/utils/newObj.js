/**
 * @description new 的过程
 * @param {object} Obj 对象
 * @returns {object}
 */
function newObj (Obj, ...rest) {
  let obj = {}

  obj.__proto__ = Obj.prototype
  var res = Obj.apply(obj, rest)

  // 这里的 res 会根据 Obj 构造函数的返回值而定
  // Obj 一般有两种情况: 1. 返回基础值 2. 返回对象
  // 情况 1 下, 则相当于返回 this
  // 情况 2 下, 则返回一个新的 object
  // 所以需要判断一下构造函数是否返回了 object(情况二) 从而进行 return
  return typeof res === 'object' ? res : obj
}

export default newObj

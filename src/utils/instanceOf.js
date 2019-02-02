/**
 * @description instanceof 实现
 * @param {object} instance 实例
 * @param {class} Obj 类
 * @returns {boolean}
 */
function instanceOf (instance, Obj) {
  let isInstanceof = false
  let op = Obj.prototype
  let ip = instance.__proto__

  while (ip) {
    if (ip === op) {
      isInstanceof = true
      break
    }
    ip = ip.__proto__
  }
  return isInstanceof
}

export default instanceOf

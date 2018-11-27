/**
 * @description Function.prototype.bind
 * @param {function} fn 函数
 * @param {object} ctx 上下文
 * @param {any:[]} rest 传入的参数
 * @returns Function
 */
function bind (fn, ctx, ...rest) {
  return function (...innerRest) {
    return fn.apply(ctx, [...rest, ...innerRest])
  }
}

export default bind

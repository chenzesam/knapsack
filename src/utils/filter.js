/**
 * @description Array.prototype.filter
 * @param {[]} arr
 * @param {function} fn 回调函数, 和 Array.prototype.filter 一样接受三个参数
 * @param {this} [ctx=null] 上下文
 * @returns {[]}
 */
function filter (arr, fn, ctx = null) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    fn.call(ctx, value, i, arr) && result.push(value)
  }
  return result
}

export default filter

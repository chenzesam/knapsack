/**
 * @description Array.prototype.map
 * @param {any[]} arr
 * @param {function} fn 回调函数, 接受的参数和 Array.prototype.map 一样
 * @param {this} [ctx=null]
 * @returns {any:[]}
 */
function map (arr, fn, ctx = null) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    result.push(fn.call(ctx, value, i, arr))
  }
  return result
}

export default map

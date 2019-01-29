/**
 * @description Array.prototype.find
 * @param {[]} arr
 * @param {function} fn 回调函数, 和 Array.prototype.find 一样接受三个参数
 * @returns {[]}
 */
function findIndex (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    if (fn(value, i, arr)) {
      return i
    }
  }
  return -1
}

export default findIndex

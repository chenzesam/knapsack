/**
 * @description Array.prototype.some
 * @param {any:[]} arr
 * @param {function} fn 回调函数
 * @returns {boolean}
 */
function some (arr, fn) {
  let isSome = false
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    if (fn(value, i, arr)) {
      isSome = true
      break
    }
  }
  return isSome
}

export default some

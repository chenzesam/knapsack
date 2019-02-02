/**
 * @description Array.prototype.every
 * @param {[]} arr 数组
 * @param {function} fn 执行函数
 * @returns {[]}
 */
function every (arr, fn) {
  let isEvery = true
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    if (!fn(value, i, arr)) {
      isEvery = false
      break
    }
  }
  return isEvery
}

export default every

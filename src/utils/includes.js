/**
 * @description 判断数组是否包含某个值
 * @param {any[]} arr
 * @param {any} value
 * @returns {boolean}
 */
function includes (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true
    }
  }
  return false
}

export default includes

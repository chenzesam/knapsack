/**
 * @description 数组去重
 * @param {any:[]} arr
 * @returns {[]}
 */
function unique (arr) {
  return [...new Set(arr)]
}

export default unique

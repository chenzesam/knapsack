/**
 * @description 非递归版扁平化数组
 * @param {[]} arr
 * @returns {[]}
 */
function flatten (arr) {
  while (arr.some(v => Array.isArray(v))) {
    arr = [].concat(...arr)
  }
  return arr
}

/**
 * @description 递归版扁平化数组
 * @param {[]} arr
 * @returns {[]}
 */
function recursiveFlatten (arr) {
  let result = []
  arr.forEach(v => {
    if (Array.isArray(v)) {
      result = result.concat(recursiveFlatten(v))
    } else {
      result.push(v)
    }
  })
  return result
}

export { flatten, recursiveFlatten }

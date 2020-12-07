/**
 * @description 非递归版扁平化数组
 * @param {[]} arr
 * @returns {[]}
 */
function flatten (arr, level = Infinity) {
  if (level <= 0) return arr
  while (arr.some(v => Array.isArray(v))) {
    if (level <= 0) return arr;
    level--;
    arr = [].concat(...arr)
  }
  return arr
}

/**
 * @description 递归版扁平化数组
 * @param {[]} arr
 * @returns {[]}
 */
function recursiveFlatten (arr, level = Infinity) {
  if (level <= 0) return arr
  let result = []
  arr.forEach(v => {
    if (Array.isArray(v)) {
      result = result.concat(recursiveFlatten(v, level - 1))
    } else {
      result.push(v)
    }
  })
  return result
}

/**
 * @description reduce 版扁平化数组
 * @param {[]} arr
 * @returns {[]}
 */
function flat(arr, level = Infinity) {
  if (level <= 0) return arr
  return arr.reduce(function (prev, cur) {
    return prev.concat((Array.isArray(cur) && needFlat) ? flat(cur, level - 1) : cur)
  }, [])
}

export { flatten, recursiveFlatten }

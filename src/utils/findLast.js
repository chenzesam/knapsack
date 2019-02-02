function findLast (arr, fn) {
  for (let i = arr.length - 1; i > 0; i--) {
    const v = arr[i]
    if (fn(v, i, arr)) {
      return v
    }
  }
  return null
  // return arr.filter(fn).pop()
}
export default findLast

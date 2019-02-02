function findLastIndex (arr, fn) {
  for (let i = arr.length - 1; i > 0; i--) {
    const v = arr[i]
    if (fn(v, i, arr)) {
      return i
    }
  }
  return -1
  // arr
  //   .map((val, i) => [i, val])
  //   .filter(([i, val]) => fn(val, i, arr))
  //   .pop()[0];
}

export default findLastIndex

function mergeSort (arr) {
  return mergeSortRec(arr)
}

function mergeSortRec (arr) {
  const length = arr.length
  if (length === 1) {
    return arr
  }
  const mid = Math.floor(length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid, length)

  return merge(mergeSortRec(left), mergeSort(right))
}

function merge (left, right) {
  let result = []
  let il = 0
  let ir = 0
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++])
    } else {
      result.push(right[ir++])
    }
    while (il < left.length) {
      result.push(left[il++])
    }
    while (ir < right.length) {
      result.push(right[ir++])
    }
    return result
  }
}

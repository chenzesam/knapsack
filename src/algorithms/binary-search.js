function binarySearch (arr, item) {
  let low = 0
  let hight = arr.length
  while (low <= hight) {
    const mid = Math.floor((low + hight) / 2)
    const element = arr[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      hight = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

export default binarySearch

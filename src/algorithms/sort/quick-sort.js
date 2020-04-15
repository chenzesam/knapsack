/**
 * 取中间值为主元, 创建两个指针, 左边一个指向数组第一项, 右边指向最后一个,
 * 然后移动左边指针, 找到比主元大的值 a, 移动右指针, 找到比主元小的值 b, 然后交换两个 a 和 b,
 * 重复这个过程, 直到左指针超过右指针,
 * 这个过程将比主元大的都放到右边, 比主元小的都放到左边,
 * 然后将主元左边数组和右边数组重复以上过程, 直至全部排序完毕
 */
function quickSort (arr) {
  return quick(arr, 0, arr.length - 1)
}

function quick (arr, left, right) {
  if (arr.length > 1) {
    // 归并数组, 并将左指针返回
    const index = partition(arr, left, right)
    if (left < index - 1) {
      quick(arr, left, index - 1)
    }
    if (index < right) {
      quick(arr, index, right)
    }
  }
}

function partition (arr, left, right) {
  // 取中间值(主元)
  const pivot = arr[Math.floor((left + right) / 2)]
  let i = left
  let j = right
  // 当左指针比右指针小时, 继续寻找
  while (i <= j) {
    // 一直找到比主元大的值
    while (arr[i] < pivot) {
      i++
    }
    // 一直找到比主元小的值
    while (arr[j] > pivot) {
      j--
    }
    // 如果这时候左指针比右指针小, 则交换值, 并将左右指针移动
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
  return i
}

export default quickSort

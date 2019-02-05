/**
 * 2 - 3 - 1 - 8 - 5
 * 第一轮: i 为 0, minIndex 一开始为 0, 循环完之后 minIndex 变为 2(因为 1 比 2 小), 交换之后
 * 1 - 3 - 2 - 8 - 5
 * 第二轮: i 为 1, minIndex 一开始为 1, 循环完之后 minIndex 变为 2(因为 2 比 3 小). 交换之后
 * 1 - 2 - 3 - 8 - 5
 * 后续的一次类推~~
 */
function selectionSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 获取当前的 index, 并赋给 minIndex
    let minIndex = i
    // 循环外层循环 index 后续的值(之前的值相当于被排过)
    for (let j = i; j < arr.length; j++) {
      // 如果后续的值比之前的 minIndex 的值小, 则将其 index 赋给 minIndex
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    // 循环完之后, 如果 i 和 minIndex 不同了则证明有更小的值, 然后将他们交换
    if (i !== minIndex) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
  }
}

export default selectionSort

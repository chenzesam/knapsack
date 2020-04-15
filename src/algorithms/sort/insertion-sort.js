/**
 * 2 - 3 - 1 - 8 - 5
 * 从第三轮开始: temp 为 1,
 * 然后 temp 和 3 比较, temp 比 3 小, 交换位置,
 * 然后 temp 和 2 比较, temp 比 2 小, 交换位置,
 * 然后 j === 0(或者 temp 比下一位大)了, 所以将 temp 置于那 arr[j]
 */
function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
}

export default insertionSort

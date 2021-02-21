function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}

function modifiedBubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    // 每一轮外层之后都会将最大(最小) 的排到最后了, 所以他们是排好的不需要再进行比较selection-sort
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}

export default bubbleSort
export { modifiedBubbleSort }

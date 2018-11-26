const findIndex = (arr, fn) => {
  let findIndex = -1

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    if (fn(value, i, arr)) {
      findIndex = i
      break
    }
  }

  return findIndex
}

export default findIndex

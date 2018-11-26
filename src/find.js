const find = (arr, fn) => {
  let findValue

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    if (fn(value, i, arr)) {
      findValue = value
      break
    }
  }

  return findValue
}

export default find

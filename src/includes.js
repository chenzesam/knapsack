const includes = (arr, v) => {
  let isIncludes = false
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    if (value === v) {
      isIncludes = true
      break
    }
  }
  return isIncludes
}

export default includes

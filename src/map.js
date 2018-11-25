const map = (arr, fn, ctx = null) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    result.push(fn.call(ctx, value, i, arr))
  }
  return result
}

export default map

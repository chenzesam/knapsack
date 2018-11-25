const filter = (arr, fn, ctx = null) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    fn.call(ctx, value, i, arr) && result.push(value)
  }
  return result
}

export default filter

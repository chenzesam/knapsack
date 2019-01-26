function chunk (arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => {
    return arr.slice(i * size, i * size + size)
  })
}

export default chunk

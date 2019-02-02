function difference (a, b) {
  const s = new Set(a)
  return b.filter(x => !s.has(x))
}

export default difference

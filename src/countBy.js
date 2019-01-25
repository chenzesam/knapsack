function countBy (arr, fn) {
  return arr
    // 将 arr 通过 fn 拆分成同类
    .map(typeof fn === 'function' ? fn : v => v[fn])
    // 统计每一类的个数
    .reduce(
      (acc, v) => {
        acc[v] = acc[v] ? ++acc[v] : 1
        return acc
      },
      {}
    )
}

export default countBy

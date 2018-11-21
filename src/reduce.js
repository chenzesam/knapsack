const reduce = (arr, fn, init) => {
  // 获取叠加器的初始值, 如果传入了 init 则使用 init 作为初始值, 否则使用 arr[0]
  let acc = init === undefined ? arr[0] : init

  // 获取初始的 index 值, 如果传入了 init 则 index 为 0(从第一个开始遍历) 否则为 1
  let initIndex = init === undefined ? 1 : 0

  for (let i = initIndex; i < arr.length; i++) {
    const cur = arr[i];
    acc = fn(acc, cur, i, arr)
  }

  return acc
}

export default reduce
const curry = (fn) => {
  let argLength = fn.length
  let args = []
  return function executor () {
    args.push(...arguments)
    if (args.length >= argLength) {
      let result = fn.apply(null, args)
      args = []
      return result
    } else {
      return executor
    }
  }
}

const curryWithInfinityParams = (fn) => {
  let args = []
  function executor () {
    args.push(...arguments)
    return executor
  }
  executor.valueOf = function () {
    return fn.apply(null, args)
  }
  return executor
}

export {
  curry,
  curryWithInfinityParams
}

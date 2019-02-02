/**
 * @description 柯里化
 * @param {function} fn 需要柯里化的函数
 * @returns {function}
 */
function curry (fn) {
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

function curryWithInfinityParams (fn) {
  let args = []
  function executor () {
    args.push(...arguments)
    return executor
  }
  executor.toString = function () {
    let result = fn.apply(null, args)
    args = []
    return result
  }
  return executor
}

export {
  curry,
  curryWithInfinityParams
}

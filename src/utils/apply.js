/* eslint-disable */
Function.prototype.applyPolyfill = function (ctx, arr) {
  // 如果 ctx 传入的是 null
  const context = ctx || window

  const fn = Symbol('fn')
  // 给上下文赋值新的调用函数
  context[fn] = this

  let result = context[fn](...arr)

  delete context[fn]

  return result
}
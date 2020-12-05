/* eslint-disable */
Function.prototype.callPolyfill = function (ctx) {
  // 如果 ctx 传入的是 null
  const context = ctx || window

  const fn = Symbol('fn')

  // 给上下文赋值新的调用函数
  context[fn] = this

  const args = [...arguments].slice(1)
  const result = context[fn](...args)

  delete context[fn]

  return result
}

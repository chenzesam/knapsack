/* eslint-disable */
Function.prototype.callPolyfill = function (ctx = window, ...args) {
  
  const fn = Symbol('fn')
  // 给上下文赋值新的调用函数
  context[fn] = this
  
  const result = context[fn](...args)

  delete context[fn]

  return result
}

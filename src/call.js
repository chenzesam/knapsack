/* eslint-disable */
Function.prototype.callPolyfillES3 = function (ctx) {
  // 如果 ctx 传入的是 null
  const context = ctx || window

  // 给上下文赋值新的调用函数
  context.fn = this

  let args = []
  let result = null

  for (let i = 1; i < arguments.length; i++) {
    const arg = arguments[i]
    args.push('arguments[' + i + ']')
  }

  result = eval('context.fn(' + args + ')')

  delete context.fn

  return result
}

Function.prototype.callPolyfillES6 = function (ctx) {
  // 如果 ctx 传入的是 null
  const context = ctx || window

  // 给上下文赋值新的调用函数
  context.fn = this

  let args = [...arguments].slice(1)
  let result = context.fn(...args)

  delete context.fn

  return result
}

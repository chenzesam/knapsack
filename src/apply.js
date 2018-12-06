/* eslint-disable */
Function.prototype.applyPolyfillES3 = function (ctx, arr) {
  // 如果 ctx 传入的是 null
  const context = ctx || window

  // 给上下文赋值新的调用函数
  context.fn = this

  let args = []
  let result = null

  for (let i = 0; i < arr.length; i++) {
    const arg = arr[i];
    args.push('arr[' + i + ']')
  }

  result = eval('context.fn(' + args + ')')

  delete context.fn

  return result
}

Function.prototype.applyPolyfillES6 = function (ctx, arr) {
  // 如果 ctx 传入的是 null
  const context = ctx || window

  // 给上下文赋值新的调用函数
  context.fn = this

  let result = context.fn(...arr)

  delete context.fn

  return result
}
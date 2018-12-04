/* eslint-disable */
Function.prototype.bindPolyfill = function (ctx, ...rest) {
  return (...innerRest) => {
    return this.apply(ctx, [...rest, ...innerRest])
  }
}

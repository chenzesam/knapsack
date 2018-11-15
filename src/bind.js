let isEffect = false

const bindPolyfill = () => {
  if (isEffect) {
    return
  }
  isEffect = true
  Function.prototype.bind = Function.prototype.bind || function (context, ...rest) {
    const self = this
    return function (...innerRest) {
      self.apply(context, [...rest, ...innerRest])
    }
  }
}

export default bindPolyfill
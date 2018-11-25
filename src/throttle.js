const throttle = (fn, time = 1000, immediate = false) => {
  let timer = null
  return function () {
    if (immediate) {
      immediate = false
      fn.apply(null, arguments)
      return
    }

    if (timer) {
      return
    }

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(null, arguments)
    }, time)
  }
}

export default throttle

// 防抖, 每次触发之后, 过 time(ms) 触发
const debounce = (fn, time = 1000, immediate = false) => {
  let timer = null
  let result = null

  return function () {
    if (immediate) {
      immediate = false
      fn.apply(arguments)
    }

    if (timer) {
      clearTimeout(timer)
      // 重置定时器
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
        fn.apply(arguments)
      }, time)
      return
    }

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(arguments)
    }, time)
    return result = null
  }
}

export default debounce
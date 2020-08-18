/**
 * @description 节流
 * @param {function} fn 需要节流的函数
 * @param {number} [time=1000] 节流事件, 默认 1s
 * @param {boolean} [immediate=false] 是否立即触发
 * @returns {function}
 */
function throttle (fn, time = 1000, immediate = false) {
  let timer = null
  let args = null
  return function () {
    if (immediate) {
      immediate = false
      fn.apply(null, arguments)
      return
    }
    
    args = arguments
    
    if (timer) {
      return
    }

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(null, args)
    }, time)
  }
}

export default throttle

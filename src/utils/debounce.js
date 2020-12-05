/**
 * @description 防抖
 * @param {function} fn 防抖函数
 * @param {number} [time=1000] 防抖事件
 * @param {boolean} [immediate=false] 是否立即触发
 * @returns {function}
 */
function debounce (fn, time = 1000, immediate = false) {
  let timer = null

  return function () {
    if (immediate) {
      immediate = false
      fn.apply(null, arguments)
      return
    }

    if (timer) {
      clearTimeout(timer)
      // 重置定时器
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
        fn.apply(null, arguments)
      }, time)
      return
    }

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(null, arguments)
    }, time)
  }
}

export default debounce

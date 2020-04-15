import Stack from '../data-structures/stack'

/**
 * @description 十进制转其他进制
 * @param {*} num 十进制数
 * @param {*} decimal 其他进制
 * @returns {string} 转化后的值
 */
function divideByDecimal (num, decimal) {
  const stack = new Stack()
  const digits = '0123456789ABCDEF'
  let rem = null
  let result = ''

  while (num > 0) {
    // 余数, 即二进制数
    rem = Math.floor(num % decimal)
    // 剩下的值
    num = Math.floor(num / decimal)
    stack.push(rem)
  }
  while (!stack.isEmpty()) {
    result += digits[stack.pop()]
  }
  return result
}

export default divideByDecimal

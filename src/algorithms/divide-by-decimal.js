/**
 * @description 十进制转其他进制
 * @param number} num 十进制数
 * @param {number} format 其他进制
 * @returns {string} 转化后的值
 */
const divideByDecimal = (num, format) => {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  if (format < 2 || format > 36) {
    return false;
  }
  while (num) {
    const rem = digits[num % format];
    num = Math.floor(num / format);
    result = rem + result;
  }

  return result;
}

export default divideByDecimal

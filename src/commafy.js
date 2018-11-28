/**
 * @description 格式化金钱, 将 10000.11 => 10,000.11
 * @param {number|string} num 需要格式化的金钱
 * @returns {string} 格式化之后的金钱
 */
function commafy (num) {
  // (?=) 前瞻捕获组, 不会捕获组内内容, 但是组内内容必须匹配
  let reg = /(\d)(?=(\d{3})+\.)/g
  return num.toString().replace(reg, matchStr => matchStr + ',')
}

export default commafy
